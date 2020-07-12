using HollypocketBackend.Models;
using HollypocketBackend.Models.Product;
using Microsoft.AspNetCore.JsonPatch;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HollypocketBackend.Utils;
using Microsoft.AspNetCore.Mvc.RazorPages;
using AutoMapper;
using MongoDB.Driver.GridFS;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders.Physical;
using HollypocketBackend.Models.Warehouse;

namespace HollypocketBackend.Services
{
    public interface IProductService
    {
        Task<GetResult> GetWithPageForAdmin(int pageSize, int pageNumber);
        Task<GetResult> GetWithPageForUser(int pageSize, int pageNumber);
        Task<GetResult> Search(string role, string keyword, int pageSize, int pageNumber);
        Task<GetResult> FilterWithHigherPrice(string role, decimal price, int pageSize, int pageNumber);
        Task<GetResult> FilterWithLowerPrice(string role, decimal price, int pageSize, int pageNumber);
        Task<GetResult> FilterWithHigherRate(string role, int rate, int pageSize, int pageNumber);
        Task<GetResult> FilterWithRangeOfPrice(string role, decimal fromPrice, decimal toPrice, int pageSize, int pageNumber);
        Task<GetResult> FilterWithRangeOfDiscount(string role, decimal fromDiscount, int pageSize, int pageNumber);
        Task<GetResult> FilterWithTag(string role, string tagName, int pageSize, int pageNumber);
        Task<GetResult> FilterWithProvider(string role, string providerName, int pageSize, int pageNumber);
        Task<Product> GetById(string id);
        Task<Product> Create(ProductModel product, int quantity);
        Task<Product> Delete(string id);
        Task<bool> IsExisting(string id);
        Task<UpdateProductModel> Update(string id, UpdateProductModel p, IFormFile picture);
        List<string> GetHotTags();
        Task<Product> UnDelete(string id);
    }
    public class ProductService : IProductService
    {
        private readonly IMongoCollection<Product> _products;
        private readonly IMongoCollection<Stock> _stocks;
        private IMapper _mapper;
        private GridFSBucket bucket;
        private readonly IMongoDatabase database;
        public ProductService(AppSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            database = client.GetDatabase(settings.DatabaseName);

            _products = database.GetCollection<Product>(settings.ProductCollectionName);
            _stocks = database.GetCollection<Stock>(settings.WarehouseCollectionName);
            _mapper = mapper;
            this.bucket = new GridFSBucket(database);
        }

        public async Task<GetResult> GetWithPageForAdmin(int pageSize, int pageNumber)
        {
            var list = await PagedList<Product>.ToPagedList(_products.Find(b => true).ToList(), pageSize, pageNumber);
            var result = new List<ProductResult>();
            foreach (var item in list.Items)
            {
                var alpha = _mapper.Map<ProductResult>(item);
                alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                result.Add(alpha);
            }
            return new GetResult { Items = result, Pagination = list.Pagination };
        }

        public async Task<GetResult> GetWithPageForUser(int pageSize, int pageNumber)
        {
            var list = await PagedList<Product>.ToPagedList(_products.Find(b => b.isDeleted == false).ToList(), pageSize, pageNumber);
            var result = new List<ProductResult>();
            foreach (var item in list.Items)
            {
                var alpha = _mapper.Map<ProductResult>(item);
                alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                result.Add(alpha);
            }
            return new GetResult { Items = result, Pagination = list.Pagination };
        }
        public async Task<GetResult> Search(string role, string keyword, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                var list = await PagedList<Product>.ToPagedList(_products.Find(b => ((b.ProductName.Contains(keyword) || b.Provider.Contains(keyword)) && b.isDeleted == false)).ToList(), pageSize, pageNumber);
                var result = new List<ProductResult>();
                foreach (var item in list.Items)
                {
                    var alpha = _mapper.Map<ProductResult>(item);
                    alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                    result.Add(alpha);
                }
                return new GetResult { Items = result, Pagination = list.Pagination };

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(b => (b.Id.Contains(keyword) || b.Provider.Contains(keyword) || b.ProductName.Contains(keyword))).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }
            }
            return null;
        }

        public List<string> GetHotTags()
        {
            var list = _products.Find(b => true).SortByDescending(b => b.CreatedAt).ToList().Take(10);
            var result = new List<string>();
            foreach (var item in list)
            {
                result = result.Union(item.Info.TagName).ToList();
            }
            return result;
        }

        public async Task<GetResult> FilterWithProvider(string role, string providerName, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (String.IsNullOrEmpty(providerName))
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => p.Provider == providerName && p.isDeleted == false).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (String.IsNullOrEmpty(providerName))
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => p.Provider == providerName).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }

            return null;
        }
        public async Task<GetResult> FilterWithTag(string role, string tagName, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (String.IsNullOrEmpty(tagName))
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Info.TagName.Any(it => it.Contains(tagName)) && p.isDeleted == false)).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    if(list.Items.Count() > 0)
                    {
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                    } 
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (String.IsNullOrEmpty(tagName))
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => p.Info.TagName.Any(tags => tags.Contains(tagName))).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }

            return null;
        }
        public async Task<GetResult> FilterWithHigherRate(string role, int rate, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (rate == null)
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => p.Rate >= rate && p.isDeleted == false).SortBy(p => p.Rate).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (rate == null)
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => p.Rate >= rate).SortBy(p => p.Rate).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }

            return null;
        }
        public async Task<GetResult> FilterWithHigherPrice(string role, decimal price, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (price == null)
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Price >= price) && p.isDeleted == false).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (price == null)
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Price >= price)).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }

            return null;
        }
        public async Task<GetResult> FilterWithLowerPrice(string role, decimal price, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (price == null)
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Price <= price) && p.isDeleted == false).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (price == null)
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Price <= price)).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }

            return null;
        }
        public async Task<GetResult> FilterWithRangeOfPrice(string role, decimal fromPrice, decimal toPrice, int pageSize, int pageNumber)
        {
            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (fromPrice == null || toPrice == null)
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Price >= fromPrice) && (p.Price <= toPrice) && p.isDeleted == false).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (fromPrice == null || toPrice == null)
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Price >= fromPrice) && (p.Price <= toPrice)).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }
            return null;
        }
        public async Task<GetResult> FilterWithRangeOfDiscount(string role, decimal fromDiscount, int pageSize, int pageNumber)
        {

            if (String.IsNullOrEmpty(role) || role.Equals("Normal"))
            {
                if (fromDiscount == null)
                {
                    return await GetWithPageForUser(pageSize, pageNumber);
                }
                else
                {
                    var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Discount >= fromDiscount) && p.isDeleted == false).SortBy(p => p.Discount).ToList(), pageSize, pageNumber);
                    var result = new List<ProductResult>();
                    foreach (var item in list.Items)
                    {
                        var alpha = _mapper.Map<ProductResult>(item);
                        alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                        result.Add(alpha);
                    }
                    return new GetResult { Items = result, Pagination = list.Pagination };
                }

            }
            else
            {
                if (role.Equals("Admin"))
                {
                    if (fromDiscount == null)
                    {
                        return await GetWithPageForAdmin(pageSize, pageNumber);
                    }
                    else
                    {
                        var list = await PagedList<Product>.ToPagedList(_products.Find(p => (p.Discount >= fromDiscount)).SortBy(p => p.Discount).ToList(), pageSize, pageNumber);
                        var result = new List<ProductResult>();
                        foreach (var item in list.Items)
                        {
                            var alpha = _mapper.Map<ProductResult>(item);
                            alpha.QuantityInStock = _stocks.CountDocuments(s => s.ProductId == item.Id);
                            result.Add(alpha);
                        }
                        return new GetResult { Items = result, Pagination = list.Pagination };
                    }
                }
            }

            return null;
        }
        public Product[] GetByIds(string[] ids)
        {

            var products = _products.Find(b => true).ToList().Where(p => ids.ToList().Any(p2 => p2 == p.Id)).ToArray();
            return products;
        }

        public async Task<bool> IsExisting(string id)
        {
            var product = await GetById(id);
            if (product != null)
                return true;
            return false;
        }
        public Task<Product> GetById(string id)
        {
            return _products.Find(p => p.Id == id).FirstOrDefaultAsync();
        }
        public async Task<Product> Delete(string id)
        {
            var product = await GetById(id);
            product.isDeleted = true;
            await _products.ReplaceOneAsync(p => p.Id == id, product);
            return product;
        }

        public async Task<Product> UnDelete(string id)
        {
            var product = await GetById(id);
            product.isDeleted = false;
            await _products.ReplaceOneAsync(p => p.Id == id, product);
            return product;
        }

        public async Task<Product> Create(ProductModel p, int quantity)
        {
            if(p.Info != null)
            {
                if (p.Info.Descriptions?.Any() != true)
                {
                    p.Info.Descriptions = new List<string>();
                }
                else
                {
                    for (int i = 0; i < p.Info.Descriptions.Count(); i++)
                    {
                        if (String.IsNullOrEmpty(p.Info.Descriptions[i]))
                        {
                            p.Info.Descriptions[i] = "&nbsp;";
                        }
                    }
                }

                if (p.Info.TagName?.Any() != true)
                {
                    p.Info.TagName = new List<string> { };
                }
                else
                {
                    p.Info.TagName.RemoveAll(tag => tag == null);
                }
            }
            else
            {
                p.Info = new Info();
            }
            
            var product = new Product
            {
                Discount = p.Discount,
                Info = p.Info,
                Price = p.Price,
                ProductName = p.ProductName,
                Provider = p.Provider,
                Questions = p.Questions,
                Rate = p.Rate,
                Pictures = new List<string>(),
                ThumbnailId = "",
                CreatedAt = DateTime.Now,
                isDeleted = false,
            };

            if (p.Files != null)
            {
                var index = 1;
                foreach (var file in p.Files)
                {
                    string idImage = UploadedFile(index, file);
                    product.Pictures.Add(idImage);
                    index++;
                }

            }


            var ThumbnailId = UploadedFile(p.ThumbnailImg.FileName, p.ThumbnailImg);
            product.ThumbnailId = ThumbnailId;

            await _products.InsertOneAsync(product);
            if (quantity > 0)
            {
                var stocks = Enumerable.Range(0, quantity).Select(s => new Stock
                {
                    IsSold = false,
                    ProductId = product.Id,
                    CreatedAt = DateTime.Now
                });
                await _stocks.InsertManyAsync(stocks);
            }
            return product;
        }

        public async Task<Product> CreateMock(Product p)
        {

            await _products.InsertOneAsync(p);
            Random r = new Random();
            var quantity = r.Next(1, 20);

            var stocks = Enumerable.Range(0, quantity).Select(s => new Stock
            {
                IsSold = false,
                ProductId = p.Id,
                CreatedAt = DateTime.Now
            });
            await _stocks.InsertManyAsync(stocks);
            return p;
        }

        public string UploadedFile(int index, IFormFile file)
        {
            var path = file.OpenReadStream();
            var id = bucket.UploadFromStream(index.ToString(), path);

            return id.ToString();
        }

        public string UploadedFile(string fileName, IFormFile file)
        {
            var path = file.OpenReadStream();
            var id = bucket.UploadFromStream(fileName, path);

            return id.ToString();
        }

        public async Task<UpdateProductModel> Update(string id, UpdateProductModel p, IFormFile picture)
        {
            var product = await GetById(id);
            _mapper.Map(p, product);
            if (picture != null)
            {
                var imgId = UploadedFile(1, picture);
                product.ThumbnailId = imgId;
            }
            await _products.ReplaceOneAsync(p => p.Id == id, product);
            return p;
        }
        public Product GetId(string Id) => _products.Find(b => b.Id == Id).FirstOrDefault();
    }
}
