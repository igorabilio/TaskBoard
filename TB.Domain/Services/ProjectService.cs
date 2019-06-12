using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Domain.Interfaces.Services;

namespace TB.Domain.Services
{
    public class ProjectService : BaseService<Project>, IProjectService
    {
        public ProjectService(IProjectRepository repository) : base(repository)
        {

        }
    }
}
