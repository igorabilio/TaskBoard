using Microsoft.AspNetCore.Mvc;
using System;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;

namespace TB.Service.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : BaseController<Task, TaskDTO>
    {
        readonly protected ITaskApp _app;

        public TasksController(ITaskApp app) : base(app)
        {
            _app = app;
        }

        [HttpGet]
        [Route("~/api/Projects/{projectId}/[controller]")]
        public IActionResult GetAllByProject(Guid projectId)
        {
            try
            {
                var data = _app.GetAllByProject(projectId);
                return new OkObjectResult(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}