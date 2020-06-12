using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.ViewModel
{
    public class InvoiceViewModel
    {
        
        public Invoice Invoice { get; set; }
        public List <InvoiceProduct> Products { get; set; }

        
       
    }
}
