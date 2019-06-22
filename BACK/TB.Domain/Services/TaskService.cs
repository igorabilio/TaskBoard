using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Domain.Interfaces.Services;

namespace TB.Domain.Services
{
    public class TaskService : BaseService<Task>, ITaskService
    {
        public TaskService(ITaskRepository repository) : base(repository)
        {

        }
    }
}
