using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.AwardAndEvents;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.AwardAndEvents.Requests.Queries
{
    public class GetEventListRequest : IRequest<PagedResult<AwardAndEventDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
