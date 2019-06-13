using TB.Domain.Entities;
using System.Collections.Generic;
using System;

namespace TB.Domain.Interfaces.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Guid Add(TEntity entity);
        void Remove(Guid id);
        void Remove(TEntity entity);
        void Update(TEntity entity);
        TEntity GetById(Guid id);
        IEnumerable<TEntity> GetAll();
    }
}
