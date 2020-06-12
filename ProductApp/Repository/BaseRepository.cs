
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductApp.Models;
using Microsoft.EntityFrameworkCore;
using ProductApp.Interfaces;

namespace ProductApp.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected DBContext context;
        protected DbSet<T> dbSet;

        public BaseRepository(DBContext context)
        {
            this.context = context;
            this.dbSet = context.Set<T>();

        }

        public void Delete(T entity)
        {
            dbSet.Remove(entity);
        }

        public IEnumerable<T> GetAll()
        {
            return dbSet.AsEnumerable();

        }

        public T GetById(int id)
        {
            return dbSet.Find(id);
        }

        public int Add(T entity)
        {
            dbSet.Add(entity);
            return context.SaveChanges();
        }

        public void Update(T entity)
        {
            dbSet.Attach(entity);
            context.Entry(entity).State = EntityState.Modified;
        }

        public void Save()
        {
            context.SaveChanges();
        }

    }
}
