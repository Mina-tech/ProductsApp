using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public string Products { get; set; }
    }
}
