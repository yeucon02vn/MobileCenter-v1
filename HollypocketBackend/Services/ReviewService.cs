using HollypocketBackend.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HollypocketBackend.Utils;

namespace HollypocketBackend.Services
{
    public class ReviewService
    {
        private readonly IMongoCollection<Review> _reviews;

        private readonly AppSettings _appSettings;
        public ReviewService(AppSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _appSettings = settings;
            _reviews = database.GetCollection<Review>(settings.ReviewCollectionName);
        }
        public async Task<PagedList<Review>> GetWithPage(string productId, int pageSize, int pageNumber)
        {
            return await PagedList<Review>.ToPagedList(_reviews.Find(b => b.productId == productId).ToList(), pageSize, pageNumber);
        }
        public List<Review> Get() =>
        _reviews.Find(review => true).ToList();

        public Review Get(string producId, string userId) =>
        _reviews.Find(b => b.productId == producId && b.userId == userId).FirstOrDefault();

        public Review Create(Review review)
        {
            if (isExist(review.productId, review.userId) == false)
            {
                _reviews.InsertOne(review);
                return review;
            }
            return null;
        }

        public Boolean isExist(string productId, string userId)
        {
            var rv = _reviews.Find(r => r.productId == productId && r.userId == userId).FirstOrDefault();
            if (rv != null)
            {
                return true;
            }
            return false;
        }
    }
}
