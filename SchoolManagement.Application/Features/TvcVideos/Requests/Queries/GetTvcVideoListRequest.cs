using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.TvcVideos;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.TvcVideos.Requests.Queries
{
    public class GetTvcVideoListRequest : IRequest<PagedResult<TvcVideoDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
