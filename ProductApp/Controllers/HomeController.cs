using Microsoft.AspNetCore.Mvc;
using ProductApp.Models;
using ProductApp.Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Helpers;

namespace ProductApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly IDistributorsRepository _distributorsRepository;
        private readonly IInvoicesRepository _invoicesRepository;


        private static readonly IList<Products> _products;
        public HomeController(IProductRepository productRepository)
        {
            this._productRepository = productRepository;
        }

        public HomeController(IDistributorsRepository distributorsRepository)
        {
            this._distributorsRepository = distributorsRepository;
        }

        public HomeController(IInvoicesRepository invoicesRepository)
        {
            this._invoicesRepository = invoicesRepository;
        }

        
        public IActionResult Index()
        {
            
            return View();


        }
        [Route("Products")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Products()
        {
            return Json(_products);
        }

        public Products GetProducts(int id)
        {

           return _productRepository.GetById(id);
           
        }

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