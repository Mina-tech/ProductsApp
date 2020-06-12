using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Interfaces;
using ProductApp.Models;
using ProductApp.Repository;
using ProductApp.ViewModel;

namespace ProductApp.Controllers
{
    public class InvoiceController : Controller
    {

        private readonly IInvoiceRepository _invoiceRepository;
        private readonly IInvoiceProductRepository _invoiceProductRepository;


        public InvoiceController(
            IInvoiceRepository invoiceRepository,
            IInvoiceProductRepository invoiceProductRepository
            )
        {
            _invoiceRepository = invoiceRepository;
            _invoiceProductRepository = invoiceProductRepository;
        }

        [HttpGet]
        public IEnumerable<Invoice> GetAllInvoices()
        {

            return _invoiceRepository.GetAll();



        }

       

        //TODO: Method for invoice per id

        [HttpGet]
        public InvoiceViewModel GetInvoice(int id)
        {
           var products = _invoiceProductRepository.GetAll();
          

            return new InvoiceViewModel
            {
                Invoice = _invoiceRepository.GetById(id),
                Products = _invoiceProductRepository.GetProductsByInvoiceId(id)
            };
        }
        [Route("/Home/InsertInvoiceView")]
        [HttpPost]
        public InvoiceViewModel InsertInvoiceView([FromBody]InvoiceViewModel invoiceViewModel)
        {


            var result = _invoiceRepository.Add(invoiceViewModel.Invoice);


            foreach (var product in invoiceViewModel.Products)
            {
                product.InvoiceId = result;
                _invoiceProductRepository.Add(product);
            }

            return new InvoiceViewModel();

        }

        [HttpGet]
        public List<Invoice> FilterDate(DateTime? date)
        {
            return _invoiceRepository.FilterInvoices(date);

        }
    }

}