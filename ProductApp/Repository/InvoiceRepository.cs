using ProductApp.Interfaces;
using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Repository
{
    public class InvoiceRepository : BaseRepository<Invoice>, IInvoiceRepository
    {
        public InvoiceRepository(DBContext context)
           : base(context)
        {

        }

        public List<Invoice> FilterInvoices(DateTime? date)
        {
            return context.Invoice
                .Where(w => w.InvoiceDate >= date)
                .ToList();
        }

    }
}
