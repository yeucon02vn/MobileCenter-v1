using System.Security.Claims;
using HollypocketBackend.Models;
using HollypocketBackend.Services;
using HollypocketBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System;

namespace HollypocketBackend.Controllers
{
    [Route("api/v1/[controller]")]
    [Authorize(Roles = "Admin")]
    [ApiController]
    [CustomExceptionFilter]
    public class AdminController : ControllerBase
    {
        private readonly AccountService _accountService;

        public AdminController(AccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("get-all")]
        public ActionResult Get()
        {

            var apiRep = new APIResponse();
            apiRep.Data = _accountService.Get().FindAll(x => true).WithoutPasswords();
            return Ok(apiRep);
        }

        [HttpPost("change-account-type")]
        public ActionResult ChangeAccountType([FromBody] AccountChangeTypeInput input)
        {
            var apiRep = new APIResponse();
            var user = _accountService.Get(input.Id);
            if (user == null) throw new Exception("Id is incorrect!");

            _accountService.ChangeAccountType(input.Id, input.Type);
            apiRep.Data = user;

            return Ok(apiRep);
        }

        [AllowAnonymous]
        [HttpPost("sign-in")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            var apiRep = new APIResponse();
            var user = _accountService.Authenticate(model.Email, model.Password);

            if (user == null || user.AccountType == AccountType.Normal) throw new Exception("Username or password is incorrect");
            apiRep.Data = new
            {
                Info = ConvertAccountToDTO(user),
                Token = user.Token
            };

            return Ok(apiRep);
        }

        [HttpPost("sign-up")]
        public ActionResult CreateUser([FromBody] AdminSignUpModel model)
        {
            var apiRep = new APIResponse();
            /* ------------------------ validate ------------------------ */
            var rs = StringHelper.Instance.IsEmailString(model.Email);
            if (!rs) throw new Exception("Invalid email!");

            var existAccount = _accountService.GetByEmail(model.Email);
            if (existAccount != null) throw new Exception("There have an existing account!");

            /* ------------------------ insert db ------------------------ */
            var account = new Account
            {
                Email = model.Email,
                Name = model.Name,
                Password = model.Password,
                Addresses = new List<Address>(),
                AccountType = model.Type
            };
            apiRep.Data = _accountService.Insert(account);

            return Ok(apiRep);
        }

        [HttpPost("delete/{id}")]
        public IActionResult Delete(string id)
        {
            var apiRep = new APIResponse();
            var Account = _accountService.Get(id);

            if (Account == null)
            {
                apiRep.Error = true;
                apiRep.Message = "Invalid id!";
                return NotFound(apiRep);
            }

            _accountService.Delete(Account.Id);
            apiRep.Message = "Deleted account!";
            apiRep.Data = ConvertAccountToDTO(Account);
            return Ok(apiRep);
        }


        private static AccountDto ConvertAccountToDTO(Account acc) =>
               new AccountDto
               {
                   Name = acc.Name,
                   Email = acc.Email,
                   PhoneNumber = acc.PhoneNumber,
                   Gender = acc.Gender,
                   Addresses = acc.Addresses,
                   Id = acc.Id,
                   AccountType = acc.AccountType

               };
    }
}