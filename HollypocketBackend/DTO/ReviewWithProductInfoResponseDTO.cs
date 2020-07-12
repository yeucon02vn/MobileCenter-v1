using System.Collections.Generic;
using HollypocketBackend.Models.Product;
using HollypocketBackend.Utils;

namespace HollypocketBackend.Models
{
    public class ReviewWithProductInfo
    {
        public string Id { get; set; }
        public RateInfo rate { get; set; }
        public ProductResult productInfo { get; set; }
    }

    public class ReviewWithProductInfoPag
    {
        public List<ReviewWithProductInfo> Items { get; set; }

        public Pagination Pagination { get; set; }
    }
}

