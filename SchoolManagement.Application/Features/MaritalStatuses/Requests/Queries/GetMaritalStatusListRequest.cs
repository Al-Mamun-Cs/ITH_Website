using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.MaritalStatuses;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.MaritalStatuses.Requests.Queries
{
    public class GetMaritalStatusListRequest : IRequest<PagedResult<MaritalStatusDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
