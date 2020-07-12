using HollypocketBackend.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HollypocketBackend.Services
{
    public class ReportService
    {
        private readonly IMongoCollection<Order> _orders;

        public ReportService(AppSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var datatbase = client.GetDatabase(settings.DatabaseName);

            _orders = datatbase.GetCollection<Order>(settings.OrdersCollectionName);
        }

        public Int64 GetTotalSaleInMonth(DateTime date)
        {
            return 600;
        }
    }
}
