using SchoolManagement.Application.Features.AwardAndEvents.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.DTOs.AwardAndEvents;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.AwardAndEvents.Handlers.Queries
{
    public class GetAwardAndEventListRequestHandler : IRequestHandler<GetAwardAndEventListRequest, PagedResult<AwardAndEventDto>>
    {

        private readonly ISchoolManagementRepository<AwardAndEvent> _AwardAndEventRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly IMapper _mapper;

        public GetAwardAndEventListRequestHandler(ISchoolManagementRepository<AwardAndEvent> AwardAndEventRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _AwardAndEventRepository = AwardAndEventRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<AwardAndEventDto>> Handle(GetAwardAndEventListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            //if (validationResult.IsValid == false)
            //    throw new ValidationException(validationResult);

            IQueryable<AwardAndEvent> AwardAndEvents = _AwardAndEventRepository.FilterWithInclude(x =>(x.Type == 1) && (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = AwardAndEvents.Count();
            AwardAndEvents = AwardAndEvents.OrderByDescending(x => x.AwardAndEventId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _AwardAndEventRepository.GetPermitedRoleFeatures(DeclareFeatureCode.AWARDANDEVENT, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var AwardAndEventDtos = _mapper.Map<List<AwardAndEventDto>>(AwardAndEvents);
            var result = new PagedResult<AwardAndEventDto>(AwardAndEventDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
