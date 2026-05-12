using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.WebsiteCVs;
using SchoolManagement.Application.Features.WebsiteCVs.Requests.Commands;
using SchoolManagement.Application.Models;
using SchoolManagement.Domain;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.WebsiteCV)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class WebsiteCVController : ControllerBase
{
    private readonly IMediator _mediator;

    public WebsiteCVController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Route("save-WebsiteCV")]
    public async Task<ActionResult<BaseCommandResponse>> Post([FromForm] CreateWebsiteCVDto WebsiteCV)
    {
        var command = new CreateWebsiteCVCommand { WebsiteCVDto = WebsiteCV };
        var response = await _mediator.Send(command);
        return Ok(response);
    }




}

