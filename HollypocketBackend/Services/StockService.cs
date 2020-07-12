using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HollypocketBackend.Models.Warehouse;
using HollypocketBackend.Utils;
using AutoMapper;
using MongoDB.Driver;
using HollypocketBackend.Models;
using Microsoft.AspNetCore.Builder;
using SQLitePCL;
using Microsoft.VisualBasic;

namespace HollypocketBackend.Services
{
    public interface IStockService
    {
        Task<PagedList<Stock>> GetWithProductId(string productId, int pageNumber, int pageSize);
        Task<int> CreateStockWithQuantity(string productId, int quantity);
        Task<bool> CanBeSold(string productId, int quantity);
        Task<List<Stock>> SoldStock(string productId, int quantity);
        Task<int> Delete(string productId, int quantity);
        Task<int> CountInStock(string productId);
        Task<int> Update(string productId, int quantity);
    }
    public class StockService: IStockService
    {
        private readonly IMongoCollection<Stock> _stocks;
        private IMapper _mapper;

        public StockService(AppSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            var datatbase = client.GetDatabase(settings.DatabaseName);

            _stocks = datatbase.GetCollection<Stock>(settings.WarehouseCollectionName);
            _mapper = mapper;
        }
        public async Task<PagedList<Stock>> GetWithProductId(string productId, int pageNumber, int pageSize)
        {
            return await PagedList<Stock>.ToPagedList(_stocks.Find(s => s.ProductId == productId).ToList(), pageNumber, pageSize);
        }
        public async Task<int> Update(string productId, int quantity)
        {
            if(quantity < 0)
            {
                return -1;
            }
            else
            {
                if((await CountInStock(productId)) - quantity > 0)
                {
                    await Delete(productId, Math.Abs(await CountInStock(productId) - quantity));
                }
                else
                {
                    await CreateStockWithQuantity(productId, Math.Abs(await CountInStock(productId) - quantity));
                }
            }
            return quantity;
        }
        public async Task<int> CreateStockWithQuantity(string productId, int quantity)
        {
            var stocks = Enumerable.Range(0, quantity).Select(s => new Stock {
                IsSold = false,
                ProductId = productId,
                CreatedAt = DateTime.Now
            });
            await _stocks.InsertManyAsync(stocks);
            return quantity;
        }

        public async Task<bool> CanBeSold(string productId, int quantity)
        {
            var stock = await _stocks.Find(s => s.IsSold == false && s.ProductId == productId).ToListAsync();
            if (stock == null)
                return false;
            if (stock.Count >= quantity)
                return true;
            return false;
        }

        public async Task<int> CountInStock(string productId)
        {
            var inStock = await _stocks.Find(s => s.ProductId == productId && s.IsSold == false).ToListAsync();
            return inStock.Count();
        }

        public async Task<List<Stock>> SoldStock(string productId, int quantity)
        {
            var CanSold = CanBeSold(productId, quantity);
            if (await CanSold)
            {
                var builder = Builders<Stock>.Update;
                var SoldStock = _stocks.Find(s => s.IsSold == false && s.ProductId == productId).Limit(quantity);
                await SoldStock.ForEachAsync(doc => _stocks.UpdateMany(s => s.Id == doc.Id, builder.Set(x => x.IsSold, true)));
                var result = await SoldStock.ToListAsync();
                return result;
            }
            else
                return null;
        }

        public async Task<int> Delete(string productId, int quantity)
        {
            var quantityCanBeDelete = await CountInStock(productId);
            var listStocks = _stocks.Find(s => s.IsSold == false).Limit(quantity).ToList();
            if (quantity <= quantityCanBeDelete && quantity > 0)
            {
                for(int i=0;i < quantity; i++)
                {
                    _stocks.DeleteOne(s => s.Id == listStocks[i].Id);
                }
                return quantity;
            }
            return -1;
        }

    }
}
