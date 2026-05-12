using MediatR;
using SchoolManagement.Application.DTOs.MaritalStatuses;
using SchoolManagement.Application.Responses;

namespace SchoolManagement.Application.Features.MaritalStatuses.Requests.Commands
{
    public class CreateMaritalStatusCommand : IRequest<BaseCommandResponse>
    {
        public CreateMaritalStatusDto MaritalStatusDto { get; set; }
    }
}
