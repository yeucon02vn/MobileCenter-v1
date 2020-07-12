using HollypocketBackend.Models;
using HollypocketBackend.Models.Product;
using HollypocketBackend.Utils;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HollypocketBackend.Services
{
    public class FeedbackService
    {
        private readonly IMongoCollection<Feedback> _Feedbacks;

        public FeedbackService(AppSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var datatbase = client.GetDatabase(settings.DatabaseName);

            _Feedbacks = datatbase.GetCollection<Feedback>(settings.FeedbacksCollectionName);
        }

        public List<Feedback> Get() => _Feedbacks.Find(b => true).ToList();
        public async Task<FeedbackPagnation> GetWithPagnation(int pageSize = 10, int pageNumber = 1)
        {
            var list = await PagedList<Feedback>.ToPagedList(_Feedbacks.Find(b => true).ToList()
            .OrderByDescending(x => x.CreatedDate).ToList()
            .OrderBy(x => x.IsRead ? 1 : 0).ToList()
            , pageSize, pageNumber);
            return new FeedbackPagnation { Items = list.Items, Pagination = list.Pagination };
        }

        public Feedback Get(string id) => _Feedbacks.Find(b => b.Id == id).FirstOrDefault();

        public Feedback Create(FeedbackInput input)
        {
            var feedback = new Feedback
            {
                Description = input.Description,
                Email = input.Email,
                OrderId = input.OrderId,
                Title = input.Title,
                IsRead = false,
                CreatedDate = DateTime.Now
            };
            _Feedbacks.InsertOne(feedback);
            return feedback;
        }

        public Feedback MarkAsRead(FeedbackMarkAsReadInput input)
        {
            var feedback = _Feedbacks.Find(b => b.Id == input.Id).FirstOrDefault();
            if (feedback == null)
            {
                throw new Exception("Feedback not found!");
            }
            feedback.IsRead = input.IsRead;
            Update(input.Id, feedback);

            return feedback;
        }

        public void Update(string id, Feedback FeedbackIn) => _Feedbacks.ReplaceOne(Feedback => Feedback.Id == id, FeedbackIn);

        public void Delete(Feedback FeedbackIn) => _Feedbacks.DeleteOne(b => b.Id == FeedbackIn.Id);
        public void Delete(string id) => _Feedbacks.DeleteOne(b => b.Id == id);
    }
}
