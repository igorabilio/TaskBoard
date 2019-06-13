using TB.Domain.Entities;
using System.Collections.Generic;
using System;

namespace TB.Domain.Interfaces.Services
{
    public interface IBaseService<TEntity> where TEntity : BaseEntity
    {
        Guid Add(TEntity entity);
        void Remove(Guid id);
        void Remove(TEntity entity);
        void Update(TEntity entity);
        TEntity GetById(Guid id);
        IEnumerable<TEntity> GetAll();
    }
}
