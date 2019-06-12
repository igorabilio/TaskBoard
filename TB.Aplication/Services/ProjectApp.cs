using AutoMapper;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Services;

namespace TB.Aplication.Services
{
    public class ProjectApp : BaseServiceApp<Project, ProjectDTO>, IProjectApp
    {
        public ProjectApp(IMapper iMapper, IProjectService service) : base(iMapper, service)
        {

        }
    }
}
