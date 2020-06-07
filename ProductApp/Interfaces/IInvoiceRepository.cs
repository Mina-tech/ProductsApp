﻿using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Repository
{
   public interface IInvoiceRepository : IBaseRepository<Invoice>
    {
        List<Invoice> FilterInvoices(DateTime? date);
    }
}
