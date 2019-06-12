using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Infra.Data.Contexts;

namespace TB.Infra.Data.Repositories
{
    public class ProjectRepository : BaseRepository<Project>, IProjectRepository
    {
        public ProjectRepository(Context context) : base(context)
        {

        }
    }
}
