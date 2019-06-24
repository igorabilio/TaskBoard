using System;
using System.Collections.Generic;
using System.Linq;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Infra.Data.Contexts;

namespace TB.Infra.Data.Repositories
{
    public class TaskRepository : BaseRepository<Task>, ITaskRepository
    {
        protected readonly Context _context;

        public TaskRepository(Context context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Task> GetAllByProject(Guid projectId)
        {
            return _context.Set<Task>().ToList();
        }
    }
}
