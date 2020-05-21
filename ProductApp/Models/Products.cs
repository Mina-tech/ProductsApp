using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public partial class Products
    {
        public int ProductId { get; set; }
        public string Sku { get; set; }
        public string ProductName { get; set; }
        public decimal? Price { get; set; }
    }
}
