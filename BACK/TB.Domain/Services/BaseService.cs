using System;
using System.Collections.Generic;
using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using TB.Domain.Interfaces.Services;

namespace TB.Domain.Services
{
    public class BaseService<TEntity> : IBaseService<TEntity> where TEntity: BaseEntity
    {
        protected readonly IBaseRepository<TEntity> repository;

        public BaseService(IBaseRepository<TEntity> repository)
        {
            this.repository = repository;
        }

        public Guid Add(TEntity entity)
        {
            return repository.Add(entity);
        }

        public void Remove(Guid id)
        {
            repository.Remove(id);
        }

        public void Remove(TEntity entity)
        {
            repository.Remove(entity);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return repository.GetAll();
        }

        public TEntity GetById(Guid id)
        {
            return repository.GetById(id);
        }

        public void Update(TEntity entity)
        {
            repository.Update(entity);
        }
    }
}
