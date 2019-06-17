using Microsoft.AspNetCore.Mvc;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;

namespace TB.Service.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : BaseController<User, UserDTO>
    {
        public UsersController(IUserApp app) : base(app)
        {
            
        }
    }
}
