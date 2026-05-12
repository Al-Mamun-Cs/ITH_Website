using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.Empolyees;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.Empolyees.Requests.Queries
{
    public class GetEmpolyeeListRequest : IRequest<PagedResult<EmpolyeeDto>>
    {
        public QueryParams QueryParams { get; set; }
    }
}
