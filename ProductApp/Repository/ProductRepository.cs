
using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;


namespace ProductApp
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository

    {

        public ProductRepository(DBContext context)
            : base(context)
        {
            
        }

    }

}
