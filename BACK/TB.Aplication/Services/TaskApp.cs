using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Services;

namespace TB.Aplication.Services
{
    public class TaskApp : BaseServiceApp<Task, TaskDTO>, ITaskApp
    {
        protected readonly ITaskService _service;
        protected readonly IMapper _iMapper;

        public TaskApp(IMapper iMapper, ITaskService service) : base(iMapper, service)
        {
            _service = service;
            _iMapper = iMapper;
        }

        public IEnumerable<TaskDTO> GetAllByProject(Guid projectId)
        {
            var tasks = _service.GetAllByProject(projectId).Where(x => x.ProjectId.Equals(projectId));
            return _iMapper.Map<IEnumerable<TaskDTO>>(tasks);
        }
    }
}
