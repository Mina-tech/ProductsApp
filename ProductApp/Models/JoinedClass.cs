using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Models
{
    public class JoinedClass 
    {
        public InvoiceProduct invoiceProduct { get; set; }
        public Invoice invoice { get; set; }
    }
}
