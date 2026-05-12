using AutoMapper;
using SchoolManagement.Application.DTOs.AwardAndEvents;
using SchoolManagement.Application.DTOs.Banks;
using SchoolManagement.Application.DTOs.BloodGroups;
using SchoolManagement.Application.DTOs.Brands;
using SchoolManagement.Application.DTOs.Bulletin;
using SchoolManagement.Application.DTOs.Countrys;
using SchoolManagement.Application.DTOs.Districts;
using SchoolManagement.Application.DTOs.Divisions;
using SchoolManagement.Application.DTOs.DuePaids;
using SchoolManagement.Application.DTOs.Empolyees;
using SchoolManagement.Application.DTOs.Features;
using SchoolManagement.Application.DTOs.Genders;
using SchoolManagement.Application.DTOs.GoodSales;
using SchoolManagement.Application.DTOs.Managements;
using SchoolManagement.Application.DTOs.MaritalStatuses;
using SchoolManagement.Application.DTOs.Modules;
using SchoolManagement.Application.DTOs.NoticeInfo;
using SchoolManagement.Application.DTOs.NoticeType;
using SchoolManagement.Application.DTOs.ProductTypes;
using SchoolManagement.Application.DTOs.Religions;
using SchoolManagement.Application.DTOs.RoleFeature;
using SchoolManagement.Application.DTOs.Suppliers;
using SchoolManagement.Application.DTOs.TvcVideos;
using SchoolManagement.Application.DTOs.Upozilas;
using SchoolManagement.Application.DTOs.Warehouses;
using SchoolManagement.Application.DTOs.WebsiteCVs;
using SchoolManagement.Application.Helpers;
using SchoolManagement.Domain;


namespace SchoolManagement.Application.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            

            #region ProductType Mappings
            CreateMap<ProductTypeDto, ProductType>().ReverseMap()
                 .ForMember(d => d.Category, o => o.MapFrom(s => s.Category.TypeName))
                 .ForMember(d => d.SubCategory, o => o.MapFrom(s => s.SubCategory.Name))
                 .ForMember(d => d.Country, o => o.MapFrom(s => s.Country.Name))
                 .ForMember(d => d.ProductImages, o => o.MapFrom<ProductPhotoUrlResolver>());
            CreateMap<ProductType, CreateProductTypeDto>().ReverseMap();
            #endregion


            #region Bulletin Mappings
            CreateMap<Bulletin,BulletinDto>().ReverseMap();
            CreateMap<Bulletin, CreateBulletinDto>().ReverseMap();
            #endregion

            #region EasyBikeType Mappings
            CreateMap<EasyBikeType,EasyBikeTypeDto>().ReverseMap();
            CreateMap<EasyBikeType, CreateEasyBikeTypeDto>().ReverseMap();
            #endregion

            

            #region Features Mapping    
            CreateMap<FeatureDto, Feature>().ReverseMap()
             .ForMember(d => d.ModuleName, o => o.MapFrom(s => s.Module.Title));

            CreateMap<Feature, CreateFeatureDto>().ReverseMap();
            #endregion

            #region Modules Mapping    
            CreateMap<Module, ModuleDto>().ReverseMap();
            CreateMap<Module, ModuleFeatureDto>().ReverseMap();

            CreateMap<Module, CreateModuleDto>().ReverseMap();
            #endregion

            #region NoticeInfo Mappings
            CreateMap<NoticeInfoDto, NoticeInfo>().ReverseMap()
                 .ForMember(d => d.NoticeType, o => o.MapFrom(s => s.NoticeType.Name))
                 .ForMember(d => d.UploadPDFFile, o => o.MapFrom<NoticeInfoFileUrlResolver>());
            CreateMap<NoticeInfo, CreateNoticeInfoDto>().ReverseMap();
            #endregion

            #region NoticeType Mappings
            CreateMap<NoticeType, NoticeTypeDto>().ReverseMap();
            CreateMap<NoticeType, CreateNoticeTypeDto>().ReverseMap();
            #endregion

            #region RoleFeature Mappings 
            CreateMap<RoleFeature, RoleFeatureDto>().ReverseMap();
            CreateMap<RoleFeature, CreateRoleFeatureDto>().ReverseMap();
            #endregion


            #region Division Mappings
            CreateMap<Division, DivisionDto>().ReverseMap();
            CreateMap<Division, CreateDivisionDto>().ReverseMap();
            #endregion

            #region District Mappings
            CreateMap<DistrictDto, District >().ReverseMap()
                .ForMember(d => d.Division, o => o.MapFrom(s => s.Division.DivisionName));
            CreateMap<District, CreateDistrictDto>().ReverseMap();
            #endregion

            #region Upozila Mappings
            CreateMap<UpozilaDto, Upozila>().ReverseMap()
                .ForMember(d => d.District, o => o.MapFrom(s => s.District.DistrictName));
            CreateMap<Upozila, CreateUpozilaDto>().ReverseMap();
            #endregion


            #region Brand Mappings 
            CreateMap<Brand, BrandDto>().ReverseMap();
            CreateMap<Brand, CreateBrandDto>().ReverseMap();
            #endregion

            #region Country Mappings 
            CreateMap<Country, CountryDto>().ReverseMap();
            CreateMap<Country, CreateCountryDto>().ReverseMap();
            #endregion



            #region BloodGroup Mappings 
            CreateMap<BloodGroup, BloodGroupDto>().ReverseMap();
            CreateMap<BloodGroup, CreateBloodGroupDto>().ReverseMap();
            #endregion

            #region MaritalStatus Mappings 
            CreateMap<MaritalStatus, MaritalStatusDto>().ReverseMap();
            CreateMap<MaritalStatus, CreateMaritalStatusDto>().ReverseMap();
            #endregion


            #region Gender Mappings 
            CreateMap<Gender, GenderDto>().ReverseMap();
            CreateMap<Gender, CreateGenderDto>().ReverseMap();
            #endregion


            #region Bank Mappings 
            CreateMap<Bank, BankDto>().ReverseMap();
            CreateMap<Bank, CreateBankDto>().ReverseMap();
            #endregion

            #region Supplier Mappings 
            CreateMap<Supplier, SupplierDto>().ReverseMap();
            CreateMap<Supplier, CreateSupplierDto>().ReverseMap();
            #endregion

            #region Warehouse Mappings 
            CreateMap<Warehouse, WarehouseDto>().ReverseMap();
            CreateMap<Warehouse, CreateWarehouseDto>().ReverseMap();
            #endregion

            #region AwardAndEvent Mappings 
            CreateMap<AwardAndEvent, AwardAndEventDto>().ReverseMap();
            CreateMap<AwardAndEvent, CreateAwardAndEventDto>().ReverseMap();
            #endregion

            #region TvcVideo Mappings 
            CreateMap<TvcVideo, TvcVideoDto>().ReverseMap();
            CreateMap<TvcVideo, CreateTvcVideoDto>().ReverseMap();
            #endregion

            #region Management Mappings 
            CreateMap<ManagementDto, Management>().ReverseMap()
                .ForMember(d => d.Designation, o => o.MapFrom(s => s.Designation.Name));
            CreateMap<Management, CreateManagementDto>().ReverseMap();
            #endregion


            #region WebsiteCV Mappings 
            CreateMap<WebsiteCVDto, WebsiteCV>().ReverseMap()
                .ForMember(d => d.DocumentFile, o => o.MapFrom<WebsiteCVFileUrlResolver>());
            CreateMap<WebsiteCV, CreateWebsiteCVDto>().ReverseMap();
            #endregion


            #region Empolyee Mappings 
            CreateMap<EmpolyeeDto, Empolyee>().ReverseMap()
                .ForMember(d => d.Designation, o => o.MapFrom(s => s.Designation.Name));
            CreateMap<Empolyee, CreateEmpolyeeDto>().ReverseMap();
            #endregion






        }

    }

}
