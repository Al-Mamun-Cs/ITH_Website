using SchoolManagement.Application.Features.TvcVideos.Requests.Queries;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Models;
using MediatR;
using AutoMapper;
using SchoolManagement.Application.DTOs.Common.Validators;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.DTOs.TvcVideos;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.TvcVideos.Handlers.Queries
{
    public class GetTvcVideoListRequestHandler : IRequestHandler<GetTvcVideoListRequest, PagedResult<TvcVideoDto>>
    {

        private readonly ISchoolManagementRepository<TvcVideo> _TvcVideoRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;

        private readonly IMapper _mapper;

        public GetTvcVideoListRequestHandler(ISchoolManagementRepository<TvcVideo> TvcVideoRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _TvcVideoRepository = TvcVideoRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<TvcVideoDto>> Handle(GetTvcVideoListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<TvcVideo> TvcVideos = _TvcVideoRepository.FilterWithInclude(x =>(x.IsWebsite == true) && (x.Name.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = TvcVideos.Count();
            TvcVideos = TvcVideos.OrderByDescending(x => x.TvcVideoId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _TvcVideoRepository.GetPermitedRoleFeatures(DeclareFeatureCode.TVCVIDEO, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var TvcVideoDtos = _mapper.Map<List<TvcVideoDto>>(TvcVideos);
            var result = new PagedResult<TvcVideoDto>(TvcVideoDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
