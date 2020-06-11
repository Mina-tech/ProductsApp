using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Interfaces;
using ProductApp.Models;

namespace ProductApp.Controllers
{
    public class InvoiceProductController : Controller
    {

        private readonly IInvoiceProductRepository _invoiceProductRepository;

        public InvoiceProductController(IInvoiceProductRepository invoiceProductRepository)
        {
            this._invoiceProductRepository = invoiceProductRepository;
        }

       
    }
}