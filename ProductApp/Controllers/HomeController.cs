using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApp.Interfaces;
using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;


namespace ProductApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly IDistributorRepository _distributorRepository;
        private readonly IInvoiceRepository _invoiceRepository;
        private readonly IInvoiceProductRepository _invoiceProductRepository;

        public HomeController(
            IProductRepository productRepository,
            IDistributorRepository distributorRepository,
            IInvoiceRepository invoiceRepository,
            IInvoiceProductRepository invoiceProductRepository)
        {
            this._productRepository = productRepository;
            this._distributorRepository = distributorRepository;
            this._invoiceRepository = invoiceRepository;
            this._invoiceProductRepository = invoiceProductRepository;
        }



        public IActionResult Index()
        {

            return View();

        }


        [HttpGet]
        public Product GetProduct(int id)
        {

            return _productRepository.GetById(id);

        }

        [HttpGet]
        public IEnumerable<Product> GetAllProducts()
        {

            return _productRepository.GetAll();



        }

        public Distributor GetDistributors(int id)
        {
            return _distributorRepository.GetById(id);
        }

        public IEnumerable<Distributor> GetAllDistributors()
        {
            return _distributorRepository.GetAll();

        }

        [HttpPost]
        public static void UpdateDistributor( int id, string name, int qty)
        {
            Distributor distributor = new Distributor() { DistributorId = id, DistributorName = name, Qty = qty };

            using (var context = new DBContext())
            {

                context.Attach(distributor);
                context.Entry(distributor).Property(p => p.Qty).IsModified = true;
                context.SaveChanges();

                
            }
       
        }

        public Invoice GetInvoices(int id)
        {
            return _invoiceRepository.GetById(id);
        }
        
        [HttpGet]
        public IEnumerable<Invoice> GetAllInvoices()
        {
            return _invoiceRepository.GetAll();

        }

        [HttpGet]
        public IEnumerable<InvoiceProduct> GetAllInvoiceProducts()
        {

            return _invoiceProductRepository.GetAll();



        }
    }
}