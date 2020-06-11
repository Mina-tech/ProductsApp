﻿using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public class InvoiceProduct
    {
        public string ProductName { get; set; }
        public string DistributorName { get; set; }
        public string Sku { get; set; }
        public int? DistributorId { get; set; }
        public int? Qty { get; set; }
        public decimal? GrossPrice { get; set; }
        public decimal? Discount { get; set; }
        public decimal? NetPrice { get; set; }
        public string Currency { get; set; }
        public string UnitOfMeasure { get; set; }
        public decimal? GrossWeight { get; set; }
        public decimal? NetWeight { get; set; }
        public int WarehouseId { get; set; }
        public int ProductId { get; set; }
        public int InvoiceId { get; set; }

        public virtual Distributor Distributor { get; set; }
        public virtual Product Product{ get; set; }
        public virtual Invoice Invoice { get; set; }
        public virtual Warehouse Warehouse { get; set; }
    }
}
