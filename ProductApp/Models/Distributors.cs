using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public partial class Distributors
    {
        public int DistributorId { get; set; }
        public string DistributorName { get; set; }
        public int? Qty { get; set; }
    }
}
