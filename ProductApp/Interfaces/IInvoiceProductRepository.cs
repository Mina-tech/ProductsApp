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
        void InsertInvoiceProduct(InvoiceProduct invoiceProduct);
        void Save();

        



    }
}
