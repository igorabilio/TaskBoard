using TB.Aplication.DTO;
using TB.Domain.Entities;
using System.Collections.Generic;
using System;

namespace TB.Aplication.Interfaces
{
    public interface IBaseApp<TEntity, TDTOEntity> 
        where TEntity : BaseEntity
        where TDTOEntity : BaseDTO
    {
        Guid Add(TDTOEntity entity);
        void Remove(Guid id);
        void Remove(TDTOEntity entity);
        void Update(TDTOEntity entity);
        TDTOEntity GetById(Guid id);
        IEnumerable<TDTOEntity> GetAll();
    }
}
