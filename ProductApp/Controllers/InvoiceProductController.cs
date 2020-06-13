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

        [Route("/Home/InsertInvoiceProduct")]
        [HttpPost]
        public InvoiceProduct InsertInvoiceProduct([FromBody]InvoiceProduct invoiceProduct)
        {
            var items = new List<InvoiceProduct>();

            foreach (var item in items)
            {
                item.ProductId = 0;
                _invoiceProductRepository.Add(item);
            }

            return new InvoiceProduct();

        }
            

        }

    }
