using System;
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

        public virtual DbSet<Distributor> Distributors { get; set; }
        public virtual DbSet<Invoice> Invoices { get; set; }
        public virtual DbSet<Product> Products { get; set; }

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
            modelBuilder.Entity<Distributor>(entity =>
            {
                entity.HasKey(e => e.DistributorId)
                    .HasName("PK__Distribu__FD1AEB9E6FD78F2D");

                entity.Property(e => e.DistributorId).ValueGeneratedNever();

                entity.Property(e => e.DistributorName).HasColumnType("text");
                entity.Property(e => e.Qty).HasColumnType("int");

            });

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.HasKey(e => e.InvoiceId)
                    .HasName("PK__Invoices__D796AAB5116EEA6D");

                entity.Property(e => e.InvoiceId).ValueGeneratedNever();

                entity.Property(e => e.InvoiceDate).HasColumnType("date");

                entity.Property(e => e.Products)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.ProductId)
                    .HasName("PK__Products__B40CC6CD16ABAFCD");

                entity.Property(e => e.ProductId).ValueGeneratedNever();

                entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.ProductName).HasColumnType("text");

                entity.Property(e => e.Sku)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
