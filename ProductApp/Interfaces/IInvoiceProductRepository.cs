using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Interfaces
{
  public  interface IInvoiceProductRepository : IBaseRepository<InvoiceProduct>
    {
        List<InvoiceProduct> GetProductsByInvoiceId(int invoiceId);
        void InsertInvoiceProduct(InvoiceProduct invoiceProduct);

        
    }
}
