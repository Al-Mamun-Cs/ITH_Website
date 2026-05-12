using MediatR;
using SchoolManagement.Application.DTOs.MaritalStatuses;

namespace SchoolManagement.Application.Features.MaritalStatuses.Requests.Queries
{
    public class GetMaritalStatusDetailRequest : IRequest<MaritalStatusDto>
    {
        public int MaritalStatusId { get; set; }
    }
}
