using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApp.Interfaces;
using ProductApp.Models;
using ProductApp.Repository;
using ProductApp.ViewModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly IDistributorRepository _distributorRepository;
        private readonly IInvoiceRepository _invoiceRepository;
        private readonly IInvoiceProductRepository _invoiceProductRepository;
        private readonly IWarehouseRepository _warehouseRepository;

        public HomeController(
            IProductRepository productRepository,
            IDistributorRepository distributorRepository,
            IInvoiceRepository invoiceRepository,
            IInvoiceProductRepository invoiceProductRepository,
            IWarehouseRepository warehouseRepository

            )
        {
            this._productRepository = productRepository;
            this._distributorRepository = distributorRepository;
            this._invoiceRepository = invoiceRepository;
            this._invoiceProductRepository = invoiceProductRepository;
            this._warehouseRepository = warehouseRepository;
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
        public static void UpdateDistributor(int id, string name, int qty)
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
        public IEnumerable<InvoiceProduct> GetAllInvoiceProducts()
        {

            return _invoiceProductRepository.GetAll();


        }
           
        }
    }
