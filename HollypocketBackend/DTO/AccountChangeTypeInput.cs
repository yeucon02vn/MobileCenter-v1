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
    public class AccountChangeTypeInput
    {
        public string Id { get; set; }
        public AccountType Type { get; set; }
    }
}

