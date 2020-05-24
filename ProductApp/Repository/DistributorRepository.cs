using ProductApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace ProductApp.Repository
{
    public class DistributorRepository : BaseRepository<Distributor>, IDistributorRepository
    {
        public DistributorRepository(DBContext context)
           : base(context)
        {

        }

    }
}
