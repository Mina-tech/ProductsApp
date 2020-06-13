using System;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProductApp.Models
{
    public partial class DBContext : DbContext
    {
        public DBContext()
        {
        }

        public DBContext(DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Distributor> Distributor { get; set; }
        public virtual DbSet<Invoice> Invoice { get; set; }
        public virtual DbSet<InvoiceProduct> InvoiceProduct { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Warehouse> Warehouse { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-3NBQ5CP\\SQLEXPRESS;Initial Catalog=DB;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.CustomerId).ValueGeneratedNever();

                entity.Property(e => e.CustomerName).HasColumnType("text");

                entity.Property(e => e.CustomerType).HasColumnType("text");
            });

            modelBuilder.Entity<Distributor>(entity =>
            {
                entity.Property(e => e.DistributorId).ValueGeneratedNever();

                entity.Property(e => e.DistributorName).HasColumnType("text");
            });

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.HasKey(e => e.InvoiceId)
                   .HasName("[PK__Invoices__D796AAB5116EEA6D]");
                  
                entity.Property(e => e.InvoiceId).ValueGeneratedOnAdd();

                entity.Property(e => e.Address)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.City).HasColumnType("text");

                entity.Property(e => e.ContactHomeNumber)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ContactMobileNumber)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.ContactPerson).HasColumnType("text");

                entity.Property(e => e.ContactPersonJobPosition).HasColumnType("text");

                entity.Property(e => e.Country).HasColumnType("text");

                entity.Property(e => e.DeliveryDate).HasColumnType("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.InvoiceDate).HasColumnType("date");

                entity.Property(e => e.InvoiceType).HasColumnType("text");

                entity.Property(e => e.MethodOfDelivery).HasColumnType("text");

                entity.Property(e => e.PaymentDate).HasColumnType("date");

                entity.Property(e => e.PlaceOfDelivery).HasColumnType("text");

                entity.Property(e => e.ProductName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.WebAddress)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                //entity.HasOne(d => d.Distributor)
                //    .WithMany(p => p.Invoice)
                //    .HasForeignKey(d => d.DistributorId)
                //    .HasConstraintName("FK__Invoices__Distri__34C8D9D1");
            });

            modelBuilder.Entity<InvoiceProduct>(entity =>
            {
                entity.HasKey(e => e.InvoiceId)
                    .HasName("PK_InvoiceProducts");

                entity.Property(e => e.InvoiceId).ValueGeneratedNever();

                entity.HasKey(e => e.ProductId)
                   .HasName("PK_InvoiceProducts");

                entity.Property(e => e.ProductId).ValueGeneratedOnAdd();

                entity.Property(e => e.Manufacturer).HasColumnType("text");

                entity.Property(e => e.Currency)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Discount).HasColumnType("decimal(5, 2)");

                entity.Property(e => e.DistributorName)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.GrossPrice).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.GrossWeight).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.NetPrice).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.NetWeight).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ProductName).HasColumnType("text");

                entity.Property(e => e.Sku)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.UnitOfMeasure)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                //entity.HasOne(d => d.Invoice)
                //    .WithOne(p => p.InvoiceProduct)
                //    .HasForeignKey<InvoiceProduct>(d => d.InvoiceId)
                //    .OnDelete(DeleteBehavior.ClientSetNull)
                //    .HasConstraintName("FK__InvoicePr__Invoi__5FB337D6");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.ProductId).ValueGeneratedNever();

                entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ProductName).HasColumnType("text");

                entity.Property(e => e.Sku)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Warehouse>(entity =>
            {
                entity.Property(e => e.WarehouseId).ValueGeneratedNever();

                entity.Property(e => e.WarehouseName).HasColumnType("text");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
