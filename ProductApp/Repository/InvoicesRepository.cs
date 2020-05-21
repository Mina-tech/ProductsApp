using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Repository
{
    public class InvoicesRepository : Repository<Invoices>, IInvoicesRepository
    {
        public InvoicesRepository(DbContext context)
           : base(context)
        {

        }

    }
}
