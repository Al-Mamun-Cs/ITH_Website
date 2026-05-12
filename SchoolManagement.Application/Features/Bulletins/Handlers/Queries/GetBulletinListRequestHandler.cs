using SchoolManagement.Application.Features.Bulletins.Requests.Queries;
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
using SchoolManagement.Application.DTOs.Bulletin;
using SchoolManagement.Domain;
using Microsoft.AspNetCore.Http;
using SchoolManagement.Application.Constants;
using SchoolManagement.Application.Enum;

namespace SchoolManagement.Application.Features.Bulletins.Handlers.Queries
{
    public class GetBulletinListRequestHandler : IRequestHandler<GetBulletinListRequest, PagedResult<BulletinDto>>
    {

        private readonly ISchoolManagementRepository<Bulletin> _BulletinRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;

        public GetBulletinListRequestHandler(ISchoolManagementRepository<Bulletin> BulletinRepository, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _BulletinRepository = BulletinRepository;
            _mapper = mapper;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<PagedResult<BulletinDto>> Handle(GetBulletinListRequest request, CancellationToken cancellationToken)
        {
            var validator = new QueryParamsValidator();
            var validationResult = await validator.ValidateAsync(request.QueryParams);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            IQueryable<Bulletin> Bulletins = _BulletinRepository.FilterWithInclude(x => (x.BuletinDetails.Contains(request.QueryParams.SearchText) || String.IsNullOrEmpty(request.QueryParams.SearchText)));
            var totalCount = Bulletins.Count();
            Bulletins = Bulletins.OrderByDescending(x => x.BulletinId).Skip((request.QueryParams.PageNumber - 1) * request.QueryParams.PageSize).Take(request.QueryParams.PageSize);
            var permission = _BulletinRepository.GetPermitedRoleFeatures(DeclareFeatureCode.FEATURE, _httpContextAccessor.HttpContext.User.FindFirst(CustomClaimTypes.Rid)?.Value);
            var BulletinDtos = _mapper.Map<List<BulletinDto>>(Bulletins);
            var result = new PagedResult<BulletinDto>(BulletinDtos, totalCount, request.QueryParams.PageNumber, request.QueryParams.PageSize, permission);

            return result;


        }
    }
}
