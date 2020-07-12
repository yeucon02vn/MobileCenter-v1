using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HollypocketBackend.Models.Product
{
    public class UpdateWithImg
    {
        public UpdateProductModel upProduct { get; set; }
        public IFormFile replaceThumb { get; set; }
    }
}
