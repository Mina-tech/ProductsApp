using Microsoft.EntityFrameworkCore;
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

        public List<InvoiceProduct> GetProductsByInvoiceId(int invoiceId)
        {
           return context.InvoiceProduct
                .Where(w => w.InvoiceId == invoiceId)
                .ToList();
        }

        public void InsertInvoiceProduct(InvoiceProduct invoiceProduct)
        {
            context.InvoiceProduct.Add(invoiceProduct);
            
        }
       
      

        
    }
}
