using ProductApp.Interfaces;
using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Repository
{
    public class InvoiceProductRepository : BaseRepository<InvoiceProduct>, IInvoiceProductRepository
    {
        public InvoiceProductRepository(DBContext context)
           : base(context)
        {

        }
    }
}
