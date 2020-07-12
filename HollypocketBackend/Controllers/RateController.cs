using HollypocketBackend.Models;
using HollypocketBackend.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace HollypocketBackend.Controllers
{
    [Route("api/v1/[controller]")]
    [Authorize]
    [CustomExceptionFilter]
    [ApiController]
    public class RateController : ControllerBase
    {
        private readonly RateService _rateService;
        private readonly AccountService _accountService;
        private readonly OrderService _orderService;
        public RateController(RateService rateService, OrderService orderService)
        {
            _rateService = rateService;
            _orderService = orderService;
        }

        [HttpGet]
        public ActionResult<List<Rate>> Get() =>
        _rateService.Get();

        [AllowAnonymous]
        [HttpGet("get-rate-byId")]
        public ActionResult Get([FromQuery] string id)
        {
            var apiRep = new APIResponse();
            var rate = _rateService.Get(id);
            apiRep.Error = false;
            if (rate == null)
            {
                apiRep.Error = true;
                apiRep.Data = null;
                return Ok(apiRep);
            }
            apiRep.Error = false;
            apiRep.Data = rate;

            return Ok(apiRep);
        }

        [AllowAnonymous]
        [HttpGet("get-rate-by-product-id")]
        public ActionResult GetByProductId([FromQuery] string id)
        {
            var apiRep = new APIResponse();
            var rate = _rateService.GetByProductId(id);
            apiRep.Error = false;
            if (rate == null)
            {
                apiRep.Error = true;
                apiRep.Data = null;
                return Ok(apiRep);
            }
            apiRep.Error = false;
            apiRep.Data = rate;

            return Ok(apiRep);
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("get-averagerate-byId/{productId}")]
        public ActionResult GetAverage(string productId)
        {
            var apiRep = new APIResponse();
            var average = _rateService.Average(productId);
            apiRep.Error = false;

            apiRep.Error = false;
            apiRep.Data = new { average };

            return Ok(apiRep);
        }
        [HttpPost("insert-Rate")]
        public ActionResult<Rate> Create(RateInfo rateInfo, string productId)
        {
            var apiRep = new APIResponse();
            var UserId = string.Empty;
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                UserId = identity.FindFirst(ClaimTypes.Name).Value;
            }
            List<Order> UserOrder = _orderService.GetById(UserId);
            var flag = 0;

            foreach (Order item in UserOrder)
            {
                for (var i = 0; i < item.orderinfo.carts.Length; i++)
                {
                    if (productId == item.orderinfo.carts[i].ProductId)
                    {
                        flag = 1;
                        break;
                    }
                }
            }
            if (flag == 1)
            {
                var _rate = new Rate
                {
                    userId = UserId,
                    productId = productId,
                    rate = rateInfo
                };
                var rate = _rateService.Create(_rate);

                apiRep.Error = false;
                apiRep.Data = rate;
            }
            else
            {
                apiRep.Error = true;
                apiRep.Message = "You didn't buy this product yet!";
            }
            return Ok(apiRep);
        }

        [HttpPut("update-Rate/{id}")]
        public IActionResult Update(string id, Rate rateIn)
        {
            var rate = _rateService.Get(id);

            if (rate == null)
            {
                return NotFound();
            }

            _rateService.Update(id, rateIn);

            return NoContent();
        }
        [Authorize(Roles = "Admin")]
        [HttpGet("get-reviews-by-user")]
        public async Task<ActionResult> GetReview([FromQuery] int pageSize = 10, [FromQuery] int pageNumber = 1)
        {
            var apiRep = new APIResponse();
            var userId = string.Empty;
            if (HttpContext.User.Identity is ClaimsIdentity identity)
            {
                userId = identity.FindFirst(ClaimTypes.Name).Value;
            }
            var rs = await _rateService.GetReviewsByUser(userId);


            apiRep.Data = rs;
            apiRep.Error = false;

            return Ok(apiRep);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var apiRep = new APIResponse();
            var rate = _rateService.Get(id);

            if (rate == null)
            {
                apiRep.Error = false;
                apiRep.Data = null;
                return Ok(apiRep);
            }

            _rateService.Delete(rate.Id);

            apiRep.Error = false;
            apiRep.Data = true;
            return Ok(apiRep);
        }

    }
}
