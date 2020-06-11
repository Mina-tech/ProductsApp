using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public class Product
    {
        public Product()
        {
            InvoiceProducts = new HashSet<InvoiceProduct>();
        }
       
        public int ProductId { get; set; }
        public string Sku { get; set; }
        public string ProductName { get; set; }
        public decimal? Price { get; set; }
        public virtual ICollection<InvoiceProduct> InvoiceProducts { get; set; }
    }
}
