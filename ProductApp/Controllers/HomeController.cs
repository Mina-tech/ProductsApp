using Microsoft.AspNetCore.Mvc;
using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Web.Helpers;

namespace ProductApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly IDistributorsRepository _distributorsRepository;
        private readonly IInvoicesRepository _invoicesRepository;


        public HomeController(IProductRepository productRepository, IDistributorsRepository distributorsRepository, IInvoicesRepository invoicesRepository)
        {
            this._productRepository = productRepository;
            this._distributorsRepository = distributorsRepository;
            this._invoicesRepository = invoicesRepository;
        }

     

        public IActionResult Index()
        {

            return View();

        }


        [HttpGet("{id}")]
        public ActionResult <Products> GetProducts(int id)
        {

           var allProducts = _productRepository.GetById(id);
            return View( allProducts);
            
        }

        [HttpGet]
        public IEnumerable<Products> GetAllProducts()
        {

             return _productRepository.GetAll();

           

        }

        public Distributors GetDistributors(int id)
        {
            return _distributorsRepository.GetById(id);
        }

        public IEnumerable<Distributors> GetAllDistributors()
        {
            return _distributorsRepository.GetAll();

        }

        public static void Update( int id, string name, int qty, Distributors distributors)
        {
            Distributors entity = new Distributors() { DistributorId = id, DistributorName = name, Qty = qty };

            using (var context = new DBContext())
            {
                context.Distributors.Attach(entity);
                context.Entry(entity).Property(X => X.Qty).IsModified = true;
                context.SaveChanges();
            }


        }

            public Invoices GetInvoices(int id)
        {
            return _invoicesRepository.GetById(id);
        }

        public IEnumerable<Invoices> GetAllInvoices()
        {
            return _invoicesRepository.GetAll();

        }
    }
}