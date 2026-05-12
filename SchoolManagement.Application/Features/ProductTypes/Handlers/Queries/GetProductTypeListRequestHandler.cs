using SchoolManagement.Application.Features.ProductTypes.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.DTOs.ProductTypes;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.ProductTypes.Handlers.Queries
{
    public class GetProductTypeListRequestHandler : IRequestHandler<GetProductTypeListRequest, PagedResult<ProductTypeDto>>
    {

        private readonly ISchoolManagementRepository<ProductType> _ProductTypeRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly IMapper _mapper;

        public GetProductTypeListRequestHandler(ISchoolManagementRepository<ProductType> ProductTypeRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _ProductTypeRepository = ProductTypeRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }
        public async Task<PagedResult<ProductTypeDto>> Handle(GetProductTypeListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<ProductType> ProductTypes = _ProductTypeRepository.FilterWithInclude(x => (x.WarehouseId == request.WarehouseId) && (x.WebsitePublish == true) && (x.TypeName.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)), "Category", "SubCategory");
            var totalCount = ProductTypes.Count();
            ProductTypes = ProductTypes.OrderByDescending(x => x.ProductTypeId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _ProductTypeRepository.GetPermitedRoleFeatures(DeclareFeatureCode.PRODUCTTYPE, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var ProductTypeDtos = _mapper.Map<List<ProductTypeDto>>(ProductTypes);
            var result = new PagedResult<ProductTypeDto>(ProductTypeDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
