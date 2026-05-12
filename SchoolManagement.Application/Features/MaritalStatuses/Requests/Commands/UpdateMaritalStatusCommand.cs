using MediatR;
using SchoolManagement.Application.DTOs.MaritalStatuses;

namespace SchoolManagement.Application.Features.MaritalStatuses.Requests.Commands
{
    public class UpdateMaritalStatusCommand : IRequest<Unit>
    {
        public MaritalStatusDto MaritalStatusDto { get; set; }
    }
}
