using System.ComponentModel.DataAnnotations;

namespace HollypocketBackend.Models
{
    public class SignUpModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
    }

    public class AdminSignUpModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }
        [Required]
        public AccountType Type { get; set; }
    }
}
