using AutoMapper;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Services;

namespace TB.Aplication.Services
{
    public class UserApp : BaseServiceApp<User, UserDTO>, IUserApp
    {
        public UserApp(IMapper iMapper, IUserService service) : base(iMapper, service)
        {

        }
    }
}
