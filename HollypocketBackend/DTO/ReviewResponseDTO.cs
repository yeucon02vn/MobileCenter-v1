using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace HollypocketBackend.Models
{
    public class ReviewResponseDTO
    {

        public string Id { get; set; }
        public string userId { get; set; }
        public string productId { get; set; }
        public RateInfo rate { get; set; }
        public AccountDto userInfo { get; set; }
    }
}

