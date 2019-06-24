using System;
using System.Collections.Generic;
using TB.Aplication.DTO;
using TB.Domain.Entities;

namespace TB.Aplication.Interfaces
{
    public interface ITaskApp : IBaseApp<Task, TaskDTO>
    {
        IEnumerable<TaskDTO> GetAllByProject(Guid projectId);
    }
}
