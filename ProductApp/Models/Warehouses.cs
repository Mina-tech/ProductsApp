using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public partial class Warehouse
    {
        public Warehouse()
        {
            InvoiceProducts = new HashSet<InvoiceProduct>();
        }

        public int WarehouseId { get; set; }
        public string WarehouseName { get; set; }
        public virtual ICollection<InvoiceProduct> InvoiceProducts { get; set; }
    }
}
