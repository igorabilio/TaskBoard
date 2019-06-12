using TB.Domain.Entities;
using TB.Domain.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TB.Infra.Data.Contexts;
using System;

namespace TB.Infra.Data.Repositories
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        protected readonly Context context;

        public BaseRepository(Context context) : base()
        {
            this.context = context;
        }

        public Guid Add(TEntity entity)
        {
            context.TransactionInit();
            var id = context.Set<TEntity>().Add(entity).Entity.Id;
            context.SendChanges();
            return id;
        }

        public void Remove(Guid id)
        {
            var entity = GetById(id);
            if (entity != null)
            {
                context.TransactionInit();
                context.Set<TEntity>().Remove(entity);
                context.SendChanges();
            }
        }

        public void Remove(TEntity entity)
        {
            context.TransactionInit();
            context.Set<TEntity>().Remove(entity);
            context.SendChanges();
        }

        public IEnumerable<TEntity> GetAll()
        {
            return context.Set<TEntity>().ToList();
        }

        public TEntity GetById(Guid id)
        {
            return context.Set<TEntity>().Find(id);
        }

        public void Update(TEntity entity)
        {
            context.TransactionInit();
            context.Set<TEntity>().Attach(entity);
            context.Entry(entity).State = EntityState.Modified;
            context.SendChanges();
        }
    }
}
