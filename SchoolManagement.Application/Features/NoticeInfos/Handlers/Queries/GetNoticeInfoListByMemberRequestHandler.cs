using SchoolManagement.Application.Features.NoticeInfos.Requests.Queries;
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
using SchoolManagement.Application.DTOs.NoticeInfo;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.NoticeInfos.Handlers.Queries
{
    public class GetNoticeInfoListByMemberRequestHandler : IRequestHandler<GetNoticeInfoListByMemberRequest, PagedResult<NoticeInfoDto>>
    {

        private readonly ISchoolManagementRepository<NoticeInfo> _NoticeInfoRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public GetNoticeInfoListByMemberRequestHandler(ISchoolManagementRepository<NoticeInfo> NoticeInfoRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _NoticeInfoRepository = NoticeInfoRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<NoticeInfoDto>> Handle(GetNoticeInfoListByMemberRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<NoticeInfo> NoticeInfos = _NoticeInfoRepository.FilterWithInclude(x => (x.NoticeTitle.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText) && x.MemberInfoId == request.MemberInfoId), "NoticeType");
            var totalCount = NoticeInfos.Count();
            NoticeInfos = NoticeInfos.OrderByDescending(x => x.NoticeInfoId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _NoticeInfoRepository.GetPermitedRoleFeatures(DeclareFeatureCode.FEATURE, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var NoticeInfoDtos = _mapper.Map<List<NoticeInfoDto>>(NoticeInfos);
            var result = new PagedResult<NoticeInfoDto>(NoticeInfoDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
