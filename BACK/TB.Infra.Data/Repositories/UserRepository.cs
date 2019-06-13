using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Infra.Data.Contexts;

namespace TB.Infra.Data.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(Context context) : base(context)
        {

        }
    }
}
