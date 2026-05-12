using SchoolManagement.Domain;
using Microsoft.EntityFrameworkCore;
using MediatR;

namespace SchoolManagement.Persistence
{
    public class SchoolManagementDbContext : AuditableDbContext
    {
        public SchoolManagementDbContext(DbContextOptions<SchoolManagementDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            

            modelBuilder.Entity<Bulletin>(entity =>
            {

            });

            

            modelBuilder.Entity<BloodGroup>(entity =>
            {

            });

            modelBuilder.Entity<MaritalStatus>(entity =>
            {

            });

            modelBuilder.Entity<Gender>(entity =>
            {

            });

            modelBuilder.Entity<Religion>(entity =>
            {

            });

            
            modelBuilder.Entity<ProductType>(entity =>
            {
                entity.HasOne(d => d.Category)
                                    .WithMany(p => p.ProductTypes)
                                    .HasForeignKey(d => d.CategoryId)
                                    .HasConstraintName("FK_ProductType_EasyBikeType");

                entity.HasOne(d => d.Brand)
                                    .WithMany(p => p.ProductTypes)
                                    .HasForeignKey(d => d.BrandId)
                                    .HasConstraintName("FK_ProductType_Brand");

                entity.HasOne(d => d.Country)
                                    .WithMany(p => p.ProductTypes)
                                    .HasForeignKey(d => d.CountryId)
                                    .HasConstraintName("FK_ProductType_Country");
            });

            

            modelBuilder.Entity<PaymentStatus>(entity =>
            {

            });

            

            modelBuilder.Entity<EasyBikeType>(entity =>
            {

            });

            modelBuilder.Entity<Feature>(entity =>
            {
                entity.HasOne(d => d.Module)
                    .WithMany(p => p.Features)
                    .HasForeignKey(d => d.ModuleId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Feature_Module");
            });


            modelBuilder.Entity<Module>(entity =>
            {

            });

            modelBuilder.Entity<NoticeInfo>(entity =>
            {

                entity.HasOne(d => d.NoticeType)
                    .WithMany(p => p.NoticeInfos)
                    .HasForeignKey(d => d.NoticeTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NoticeInfo_NoticeType");

            });

            modelBuilder.Entity<NoticeType>(entity =>
            {

            });


            modelBuilder.Entity<RoleFeature>(entity =>
            {
                entity.HasKey(e => new { e.RoleId, e.FeatureKey });

                entity.ToTable("RoleFeature");


            });
            

            modelBuilder.Entity<Division>(entity =>
            {

            });

            modelBuilder.Entity<District>(entity =>
            {
                entity.HasOne(d => d.Division)
                    .WithMany(p => p.Districts)
                    .HasForeignKey(d => d.DivisionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_District_Division");

            });

            modelBuilder.Entity<Upozila>(entity =>
            {
                entity.HasOne(d => d.District)
                    .WithMany(p => p.Upozilas)
                    .HasForeignKey(d => d.DistrictId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Upozila_District");

            });

            modelBuilder.Entity<CustomerType>(entity =>
            {

            });

            

            modelBuilder.Entity<Brand>(entity =>
            {

            });

            

            modelBuilder.Entity<Country>(entity =>
            {

            });

            

            modelBuilder.Entity<Bank>(entity =>
            {

            });
            modelBuilder.Entity<Supplier>(entity =>
            {

            });


            modelBuilder.Entity<Warehouse>(entity =>
            {

            });

            modelBuilder.Entity<AwardAndEvent>(entity =>
            {

            });

            modelBuilder.Entity<TvcVideo>(entity =>
            {

            });

            modelBuilder.Entity<Management>(entity =>
            {

            });
            modelBuilder.Entity<WebsiteCV>(entity =>
            {

            });

            modelBuilder.Entity<Empolyee>(entity =>
            {

            });

            modelBuilder.Entity<SubCategory>(entity =>
            {

            });





        }

        public virtual DbSet<SubCategory> SubCategory { get; set; } = null!;
        public virtual DbSet<Empolyee> Empolyee { get; set; } = null!;
        public virtual DbSet<WebsiteCV> WebsiteCV { get; set; } = null!;
        public virtual DbSet<Management> Management { get; set; } = null!;
        public virtual DbSet<TvcVideo> TvcVideo { get; set; } = null!;
        public virtual DbSet<AwardAndEvent> AwardAndEvent { get; set; } = null!;
        public virtual DbSet<Warehouse> Warehouse { get; set; } = null!;
        public virtual DbSet<Supplier> Supplier { get; set; } = null!;
        public virtual DbSet<Bank> Bank { get; set; } = null!;
        public virtual DbSet<Religion> Religion { get; set; } = null!;
        public virtual DbSet<Gender> Gender { get; set; } = null!;
        public virtual DbSet<MaritalStatus> MaritalStatus { get; set; } = null!;
        public virtual DbSet<BloodGroup> BloodGroup { get; set; } = null!;
        public virtual DbSet<Brand> Brand { get; set; } = null!;
        public virtual DbSet<CustomerType> CustomerType { get; set; } = null!;
        public virtual DbSet<Division> Division { get; set; } = null!;
        public virtual DbSet<District> District { get; set; } = null!;
        public virtual DbSet<Upozila> Upozila { get; set; } = null!;
        public virtual DbSet<PaymentStatus> PaymentStatus { get; set; } = null!;
        public virtual DbSet<ProductType> ProductType { get; set; } = null!;
        public virtual DbSet<Bulletin> Bulletin { get; set; } = null!;
        public virtual DbSet<EasyBikeType> EasyBikeType { get; set; } = null!;
        public virtual DbSet<Feature> Feature { get; set; } = null!;
        public virtual DbSet<Module> Module { get; set; } = null!;
        public virtual DbSet<NoticeInfo> NoticeInfo { get; set; } = null!;
        public virtual DbSet<NoticeType> NoticeType { get; set; } = null!;
        public virtual DbSet<RoleFeature> RoleFeature { get; set; } = null!;
    }
}
