using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.GoodSales;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.EasyBikeTypes.Requests.Queries
{
    public class GetEasyBikeTypeListRequest : IRequest<PagedResult<EasyBikeTypeDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
