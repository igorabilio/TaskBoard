using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Infra.Data.Contexts;

namespace TB.Infra.Data.Repositories
{
    public class TaskRepository : BaseRepository<Task>, ITaskRepository
    {
        public TaskRepository(Context context) : base(context)
        {

        }
    }
}
