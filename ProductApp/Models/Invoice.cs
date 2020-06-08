using System;
using System.Collections.Generic;

namespace ProductApp.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public string ProductName { get; set; }
        public int? DistributorId { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ContactPerson { get; set; }
        public string ContactPersonJobPosition { get; set; }
        public string ContactHomeNumber { get; set; }
        public string ContactMobileNumber { get; set; }
        public string Email { get; set; }
        public string WebAddress { get; set; }
        public int? InvoiceNumber { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public DateTime? PaymentDate { get; set; }
        public string MethodOfDelivery { get; set; }
        public string PlaceOfDelivery { get; set; }
        public string InvoiceType { get; set; }

        public virtual Distributor Distributor { get; set; }
    }
}
