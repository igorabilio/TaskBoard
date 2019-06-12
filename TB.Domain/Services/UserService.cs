using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Domain.Interfaces.Services;

namespace TB.Domain.Services
{
    public class UserService : BaseService<User>, IUserService
    {
        public UserService(IUserRepository repository) : base(repository)
        {

        }
    }
}
