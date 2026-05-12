using SchoolManagement.Application.Features.MaritalStatuses.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.DTOs.MaritalStatuses;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.MaritalStatuses.Handlers.Queries
{
    public class GetMaritalStatusListRequestHandler : IRequestHandler<GetMaritalStatusListRequest, PagedResult<MaritalStatusDto>>
    {

        private readonly ISchoolManagementRepository<MaritalStatus> _MaritalStatusRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly IMapper _mapper;

        public GetMaritalStatusListRequestHandler(ISchoolManagementRepository<MaritalStatus> MaritalStatusRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _MaritalStatusRepository = MaritalStatusRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<MaritalStatusDto>> Handle(GetMaritalStatusListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<MaritalStatus> MaritalStatuss = _MaritalStatusRepository.FilterWithInclude(x => (x.FullName.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = MaritalStatuss.Count();
            MaritalStatuss = MaritalStatuss.OrderByDescending(x => x.MaritalStatusId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _MaritalStatusRepository.GetPermitedRoleFeatures(DeclareFeatureCode.MARITALSTATUS, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var MaritalStatusDtos = _mapper.Map<List<MaritalStatusDto>>(MaritalStatuss);
            var result = new PagedResult<MaritalStatusDto>(MaritalStatusDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
