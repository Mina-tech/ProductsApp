using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Interfaces
{
    public interface IProductRepository : IBaseRepository<Product>
    {
      
    }
}
