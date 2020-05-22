
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;
using ProductApp.Models;

namespace ProductApp.Repository
{
    public class Repository <T> : IRepository<T> where T : class
    {
        protected DbContext context;
        protected DbSet<T> dbSet;
        
        public Repository (DbContext context)
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

        public void Insert(T entity)
        {
            dbSet.Add(entity);
        }

        public void Update(T entity)
        {
            dbSet.Attach(entity);
            context.Entry(entity).State = EntityState.Modified;
        }
    }
}
