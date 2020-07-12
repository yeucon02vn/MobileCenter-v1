using AutoMapper;
using HollypocketBackend.Models;
using HollypocketBackend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HollypocketBackend.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/v1/[controller]")]
    [CustomExceptionFilter]
    [ApiController]
    public class FeedbacksController : ControllerBase
    {
        private readonly FeedbackService _feedbackService;
        private readonly IMapper _mapper;

        public FeedbacksController(FeedbackService feedbackService, IMapper mapper)
        {
            _feedbackService = feedbackService;
            _mapper = mapper;
        }

        [HttpGet("get-all")]
        public async Task<ActionResult> GetAll([FromQuery] int pageSize = 10, [FromQuery] int pageNumber = 1)
        {
            var apiRep = new APIResponse();
            apiRep.Data = await _feedbackService.GetWithPagnation(pageSize, pageNumber);
            return Ok(apiRep);
        }

        [HttpPost("mark-as-read")]
        public ActionResult MarkAsRead([FromBody] FeedbackMarkAsReadInput input)
        {
            var apiRep = new APIResponse();
            apiRep.Data = _feedbackService.MarkAsRead(input);
            return Ok(apiRep);
        }

        [AllowAnonymous]
        [HttpPost("create")]
        public ActionResult CreateFeedBack([FromBody] FeedbackInput data)
        {
            var apiRep = new APIResponse();
            apiRep.Data = _feedbackService.Create(data);

            return Ok(apiRep);
        }
    }
}
