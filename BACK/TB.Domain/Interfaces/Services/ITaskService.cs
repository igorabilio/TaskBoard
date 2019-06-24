using System;
using System.Collections.Generic;
using TB.Domain.Entities;

namespace TB.Domain.Interfaces.Services
{
    public interface ITaskService : IBaseService<Task>
    {
        IEnumerable<Task> GetAllByProject(Guid projectId);
    }
}
