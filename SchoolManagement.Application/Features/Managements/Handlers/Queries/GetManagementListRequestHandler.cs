using SchoolManagement.Application.Features.Managements.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.DTOs.Managements;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.Managements.Handlers.Queries
{
    public class GetManagementListRequestHandler : IRequestHandler<GetManagementListRequest, PagedResult<ManagementDto>>
    {

        private readonly ISchoolManagementRepository<Management> _ManagementRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly IMapper _mapper;

        public GetManagementListRequestHandler(ISchoolManagementRepository<Management> ManagementRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _ManagementRepository = ManagementRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<ManagementDto>> Handle(GetManagementListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<Management> Managements = _ManagementRepository.FilterWithInclude(x =>(x.IsWebsite == true) && (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)), "Designation");
            var totalCount = Managements.Count();
            Managements = Managements.OrderBy(x => x.ManagementId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _ManagementRepository.GetPermitedRoleFeatures(DeclareFeatureCode.MANAGEMENT, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var ManagementDtos = _mapper.Map<List<ManagementDto>>(Managements);
            var result = new PagedResult<ManagementDto>(ManagementDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
