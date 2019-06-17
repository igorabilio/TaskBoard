using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;

namespace TB.Service.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class BaseController<Entity, DTOEntity> : Controller
        where Entity : BaseEntity
        where DTOEntity : BaseDTO
    {
        readonly protected IBaseApp<Entity, DTOEntity> app;

        public BaseController(IBaseApp<Entity, DTOEntity> app)
        {
            this.app = app;
        }

        [HttpGet]
        [Route("")]
        public IActionResult GetAll()
        {
            try
            {
                var data = app.GetAll();
                return new OkObjectResult(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                var data = app.GetById(id);
                return new OkObjectResult(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Add([FromBody] DTOEntity data)
        {
            try
            {
                return new OkObjectResult(app.Add(data));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("{id}")]
        public IActionResult Update(Guid id, [FromBody] DTOEntity data)
        {
            try
            {
                data.ID = id;
                app.Update(data);
                return new OkObjectResult(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Remove(Guid id)
        {
            try
            {
                app.Remove(id);
                return new OkObjectResult(true);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}