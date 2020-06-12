using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductApp.Models
{
    public partial class InvoiceProduct
    {
        public int InvoiceId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? ProductId { get; set; }
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
        public int? WarehouseId { get; set; }
    }
}
