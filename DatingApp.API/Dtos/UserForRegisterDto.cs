using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(15, MinimumLength=5, ErrorMessage="Password must be longer than 5 characters.")]
        public string Password { get; set; }
    }
}