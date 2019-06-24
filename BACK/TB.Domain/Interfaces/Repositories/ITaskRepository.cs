using System;
using System.Collections.Generic;
using TB.Domain.Entities;

namespace TB.Domain.Interfaces.Repositories
{
    public interface ITaskRepository : IBaseRepository<Task>
    {
        IEnumerable<Task> GetAllByProject(Guid projectId);
    }
}
