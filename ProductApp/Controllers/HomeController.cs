using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApp.Interfaces;
using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

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


        [HttpGet]
        public Invoice GetInvoice(int id)
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
        [Route("/Home/InsertInvoiceProduct")]
        [HttpPost]
         public InvoiceProduct InsertInvoiceProduct([FromBody]InvoiceProduct invoiceProduct)
         {
          
            InvoiceProduct insertInvoice = new InvoiceProduct();
           
            
                insertInvoice.Sku = invoiceProduct.Sku;
                insertInvoice.ProductName = invoiceProduct.ProductName;
                insertInvoice.DistributorName = invoiceProduct.DistributorName;
                insertInvoice.GrossPrice = invoiceProduct.GrossPrice;
                insertInvoice.Qty = invoiceProduct.Qty;
                insertInvoice.Discount = invoiceProduct.Discount;

                _invoiceProductRepository.Add(insertInvoice);
                _invoiceProductRepository.Save();
                return insertInvoice;
            

         }
          
         

        }
}