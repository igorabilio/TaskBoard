using System;
using System.Collections.Generic;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Domain.Interfaces.Services;

namespace TB.Domain.Services
{
    public class TaskService : BaseService<Task>, ITaskService
    {
        protected readonly ITaskRepository _repository;

        public TaskService(ITaskRepository repository) : base(repository)
        {
            _repository = repository;
        }

        public IEnumerable<Task> GetAllByProject(Guid projectId)
        {
            return _repository.GetAllByProject(projectId);
        }
    }
}
