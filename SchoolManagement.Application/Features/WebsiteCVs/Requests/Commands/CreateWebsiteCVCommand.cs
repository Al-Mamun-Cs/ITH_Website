using MediatR;
using SchoolManagement.Application.DTOs.WebsiteCVs;
using SchoolManagement.Application.Responses;

namespace SchoolManagement.Application.Features.WebsiteCVs.Requests.Commands
{
    public class CreateWebsiteCVCommand : IRequest<BaseCommandResponse>
    {
        public CreateWebsiteCVDto WebsiteCVDto { get; set; }
    }
}
