using AutoMapper;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Services;

namespace TB.Aplication.Services
{
    public class TaskApp : BaseServiceApp<Task, TaskDTO>, ITaskApp
    {
        public TaskApp(IMapper iMapper, ITaskService service) : base(iMapper, service)
        {

        }
    }
}
