using AutoMapper;
using TB.Aplication.DTO;
using TB.Aplication.Interfaces;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Services;
using System;
using System.Collections.Generic;

namespace TB.Aplication.Services
{
    public class BaseServiceApp<TEntity, TDTOEntity> : IBaseApp<TEntity, TDTOEntity>
        where TEntity : BaseEntity
        where TDTOEntity : BaseDTO
    {
        protected readonly IBaseService<TEntity> service;
        protected readonly IMapper iMapper;

        public BaseServiceApp(IMapper iMapper, IBaseService<TEntity> service)
            : base()
        {
            this.iMapper = iMapper;
            this.service = service;
        }

        public Guid Add(TDTOEntity entity)
        {
            return service.Add(iMapper.Map<TEntity>(entity));
        }

        public void Remove(Guid id)
        {
            service.Remove(id);
        }

        public void Remove(TDTOEntity entity)
        {
            service.Remove(iMapper.Map<TEntity>(entity));
        }

        public IEnumerable<TDTOEntity> GetAll()
        {
            return iMapper.Map<IEnumerable<TDTOEntity>>(service.GetAll());
        }

        public TDTOEntity GetById(Guid id)
        {
            return iMapper.Map<TDTOEntity>(service.GetById(id));
        }

        public void Update(TDTOEntity entity)
        {
            service.Update(iMapper.Map<TEntity>(entity));
        }
    }
}
