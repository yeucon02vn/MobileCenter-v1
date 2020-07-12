using HollypocketBackend.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using HollypocketBackend.Utils;
using HollypocketBackend.Models.Product;
using HollypocketBackend.Models.Warehouse;

namespace HollypocketBackend.Services
{
    public class RateService
    {
        private IMapper _mapper;
        private readonly IMongoCollection<Rate> _rates;
        private readonly IMongoCollection<Product> _products;
        private readonly IMongoCollection<Account> _account;
        private readonly AppSettings _appSettings;
        private readonly IMongoCollection<Stock> _stocks;
        public RateService(AppSettings settings, IMapper mapper)
        {
            _mapper = mapper;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _appSettings = settings;
            _rates = database.GetCollection<Rate>(settings.RateCollectionName);
            _products = database.GetCollection<Product>(settings.ProductCollectionName);
            _account = database.GetCollection<Account>(settings.AccountsCollectionName);
            _stocks = database.GetCollection<Stock>(settings.WarehouseCollectionName);
        }
        public List<Rate> Get() =>
                _rates.Find(rate => true).ToList();

        public Rate Get(string id) =>
        _rates.Find<Rate>(b => b.productId == id).FirstOrDefault();

        public List<ReviewResponseDTO> GetByProductId(string id)
        {
            var reviews = _rates.Find(b => b.productId == id).ToList();
            List<ReviewResponseDTO> result = new List<ReviewResponseDTO>();

            foreach (var review in reviews)
            {
                var user = _account.Find(b => b.Id == review.userId).FirstOrDefault();
                var temp = new ReviewResponseDTO
                {
                    Id = review.Id,
                    userId = user.Id,
                    productId = review.productId,
                    rate = review.rate,
                    userInfo = ConvertAccountToDTO(user)
                };
                result.Add(temp);
            }
            return result;
        }

        private static AccountDto ConvertAccountToDTO(Account acc) =>
                new AccountDto
                {
                    Name = acc.Name,
                    Email = acc.Email,
                    PhoneNumber = acc.PhoneNumber,
                    Gender = acc.Gender,
                    Addresses = acc.Addresses,
                    Id = acc.Id,
                    AccountType = acc.AccountType

                };

        public Rate Create(Rate rate)
        {
            if (isExist(rate.productId, rate.userId) == false)
            {
                _rates.InsertOne(rate);
                Average(rate.productId);
                return rate;
            }
            return null;
        }

        public void Update(string id, Rate rateIn) =>
        _rates.ReplaceOne(rate => rate.Id == id, rateIn);

        public void Delete(Rate rateIn) => _rates.DeleteOne(b => b.Id == rateIn.Id);
        public void Delete(string id) => _rates.DeleteOne(b => b.Id == id);
        public int Average(string productId)
        {

            int sum = 0;
            var rates = _rates.Find(r => r.productId == productId).ToList();
            foreach (var item in rates)
            {
                sum += (item.rate.ValueRating);
            }
            var average = (int)(sum / (rates.LongCount()));
            var product = _products.Find(p => p.Id == productId).FirstOrDefault();
            product.Rate = average;
            _products.ReplaceOne(p => p.Id == productId, product);
            return average;
        }
        public Boolean isExist(string productId, string userId)
        {
            var rv = _rates.Find(r => r.productId == productId && r.userId == userId).FirstOrDefault();
            if (rv != null)
            {
                return true;
            }
            return false;
        }

        public async Task<ReviewWithProductInfoPag> GetReviewsByUser(string userId, int pageSize = 10, int pageNumber = 1)
        {
            var reviews = await PagedList<Rate>.ToPagedList(_rates.Find(v => v.userId == userId).ToList(), pageSize, pageNumber);
            var rs = new List<ReviewWithProductInfo>();

            var result = new List<ProductResult>();
            foreach (var review in reviews.Items)
            {
                var p = _products.Find(b => b.Id == review.productId).FirstOrDefault();
                var productResult = _mapper.Map<ProductResult>(p);

                var temp = new ReviewWithProductInfo
                {
                    Id = review.Id,
                    rate = review.rate,
                    productInfo = productResult
                };
                rs.Add(temp);
            }
            return new ReviewWithProductInfoPag
            {
                Items = rs,
                Pagination = reviews.Pagination
            };
        }

    }
}
