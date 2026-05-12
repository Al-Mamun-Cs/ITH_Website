using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.Managements;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.Managements.Requests.Queries
{
    public class GetManagementListRequest : IRequest<PagedResult<ManagementDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
