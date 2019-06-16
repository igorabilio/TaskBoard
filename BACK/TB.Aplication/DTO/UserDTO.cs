using System;
using System.Collections.Generic;
using System.Text;

namespace TB.Aplication.DTO
{
    public class UserDTO : BaseDTO
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Status { get; set; }
    }
}
