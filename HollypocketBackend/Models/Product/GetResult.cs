using HollypocketBackend.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HollypocketBackend.Models.Product
{
    public class GetResult
    {
        public List<ProductResult> Items { get; set; }

        public Pagination Pagination { get; set; }
    }
}
