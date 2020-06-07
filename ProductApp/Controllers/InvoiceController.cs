using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Models;
using ProductApp.Repository;

namespace ProductApp.Controllers
{
    public class InvoiceController : Controller
    {

        private readonly IInvoiceRepository _invoiceRepository;

        public InvoiceController(IInvoiceRepository invoiceRepository)
        {
           this._invoiceRepository = invoiceRepository;
        }

        [HttpGet]
        public IEnumerable<Invoice> GetInvoices()
        {
            return _invoiceRepository.GetAll();
        }

        //TODO: Method for invoice per id


        [HttpGet]
        public Invoice GetInvoice(int id)
        {
            return _invoiceRepository.GetById(id);
        }
    }
}