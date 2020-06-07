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

        public void InsertInvoiceProduct(InvoiceProduct invoiceProduct)
        {
            context.InvoiceProducts.Add(invoiceProduct);
            
        }

        public void Save()
        {
            context.SaveChanges();
        }
    }
}
