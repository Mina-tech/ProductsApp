using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public partial class Distributor
    {
        public Distributor()
        {
            Invoice = new HashSet<Invoice>();
        }

        public int DistributorId { get; set; }
        public string DistributorName { get; set; }
        public int? Qty { get; set; }

        public virtual ICollection<Invoice> Invoice { get; set; }
    }
}
