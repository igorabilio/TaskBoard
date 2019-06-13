using AutoMapper;
using TB.Aplication.DTO;
using TB.Domain.Entities;

namespace TB.Aplication
{
    public class MappingEntities : Profile
    {
        public MappingEntities()
        {
            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();

            CreateMap<Project, ProjectDTO>();
            CreateMap<ProjectDTO, Project>();
        }
    }
}
