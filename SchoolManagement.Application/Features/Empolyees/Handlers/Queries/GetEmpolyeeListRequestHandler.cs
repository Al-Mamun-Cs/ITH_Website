using SchoolManagement.Application.Features.Empolyees.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.DTOs.Empolyees;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.Empolyees.Handlers.Queries
{
    public class GetEmpolyeeListRequestHandler : IRequestHandler<GetEmpolyeeListRequest, PagedResult<EmpolyeeDto>>
    {

        private readonly ISchoolManagementRepository<Empolyee> _EmpolyeeRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public GetEmpolyeeListRequestHandler(ISchoolManagementRepository<Empolyee> EmpolyeeRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _EmpolyeeRepository = EmpolyeeRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<EmpolyeeDto>> Handle(GetEmpolyeeListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<Empolyee> Empolyees = _EmpolyeeRepository.FilterWithInclude(x => ( x.IsWebsite == true) && (x.Status == 1) && (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)), "Designation");
            var totalCount = Empolyees.Count();
            Empolyees = Empolyees.OrderByDescending(x => x.EmpolyeeId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _EmpolyeeRepository.GetPermitedRoleFeatures(DeclareFeatureCode.EMPOLYEE, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var EmpolyeeDtos = _mapper.Map<List<EmpolyeeDto>>(Empolyees);
            var result = new PagedResult<EmpolyeeDto>(EmpolyeeDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
