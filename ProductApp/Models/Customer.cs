using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public partial class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerType { get; set; }
        public string CustomerName { get; set; }
    }
}
