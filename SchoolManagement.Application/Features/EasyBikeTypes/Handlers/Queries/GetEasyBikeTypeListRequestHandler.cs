using SchoolManagement.Application.Features.EasyBikeTypes.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Collections.Generic;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;
using SchoolManagement.Application.DTOs.GoodSales;

namespace SchoolManagement.Application.Features.EasyBikeTypes.Handlers.Queries
{
    public class GetEasyBikeTypeListRequestHandler : IRequestHandler<GetEasyBikeTypeListRequest, PagedResult<EasyBikeTypeDto>>
    {

        private readonly ISchoolManagementRepository<EasyBikeType> _EasyBikeTypeRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public GetEasyBikeTypeListRequestHandler(ISchoolManagementRepository<EasyBikeType> EasyBikeTypeRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _EasyBikeTypeRepository = EasyBikeTypeRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;

        }

        public async Task<PagedResult<EasyBikeTypeDto>> Handle(GetEasyBikeTypeListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<EasyBikeType> EasyBikeTypes = _EasyBikeTypeRepository.FilterWithInclude(x =>(x.ItemProductionTypeId == 2) && (x.IsWebsite == true) && (x.TypeName.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = EasyBikeTypes.Count();
            EasyBikeTypes = EasyBikeTypes.OrderByDescending(x => x.EasyBikeTypeId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _EasyBikeTypeRepository.GetPermitedRoleFeatures(DeclareFeatureCode.EASYBIKETYPE, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var EasyBikeTypeDtos = _mapper.Map<List<EasyBikeTypeDto>>(EasyBikeTypes);
            var result = new PagedResult<EasyBikeTypeDto>(EasyBikeTypeDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
