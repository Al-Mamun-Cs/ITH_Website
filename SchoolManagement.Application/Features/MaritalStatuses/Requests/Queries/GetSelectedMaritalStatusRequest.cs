using MediatR;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Application.Features.MaritalStatuses.Requests.Queries
{
    public class GetSelectedMaritalStatusRequest : IRequest<List<SelectedModel>>
    {
    }
}
