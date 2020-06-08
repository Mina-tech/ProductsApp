using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Interfaces
{
    interface ICustomerRepository : IBaseRepository<Customer>
    {
    }
}
