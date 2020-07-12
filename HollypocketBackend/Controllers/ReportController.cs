using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HollypocketBackend.Models;
using HollypocketBackend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HollypocketBackend.Controllers
{
    [ApiController]
    [Authorize(Roles = "Admin")]
    [CustomExceptionFilter]
    [Route("api/v1/[controller]")]
    public class ReportController : ControllerBase
    {

        private readonly ReportService _reportService;

        public ReportController(ReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpGet("get-total-sale-in-month")]
        public IActionResult GetTotalSaleInMonth([FromQuery] String month)

        {
            DateTime enteredDate = DateTime.Parse(month);
            var rep = new APIResponse();

            return Ok(rep);
        }
    }
}
