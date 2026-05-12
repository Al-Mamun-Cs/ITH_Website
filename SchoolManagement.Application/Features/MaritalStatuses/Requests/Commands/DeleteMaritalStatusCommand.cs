using MediatR;

namespace SchoolManagement.Application.Features.MaritalStatuses.Requests.Commands
{
    public class DeleteMaritalStatusCommand : IRequest
    {
        public int MaritalStatusId { get; set; }
    }
}
