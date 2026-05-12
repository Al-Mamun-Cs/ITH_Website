using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.AwardAndEvents;
using SchoolManagement.Application.Features.AwardAndEvents.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.AwardAndEvent)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class AwardAndEventController : ControllerBase
{
    private readonly IMediator _mediator;

    public AwardAndEventController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-AwardAndEvents")]
    public async Task<ActionResult<PagedResult<AwardAndEventDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var AwardAndEvents = await _mediator.Send(new GetAwardAndEventListRequest { QueryParams = queryParams });
        return Ok(AwardAndEvents);
    }

    [HttpGet]
    [Route("get-Events")]
    public async Task<ActionResult<PagedResult<AwardAndEventDto>>> GetEvents([FromQuery] QueryParams queryParams)
    {
        var AwardAndEvents = await _mediator.Send(new GetEventListRequest { QueryParams = queryParams });
        return Ok(AwardAndEvents);
    }

    [HttpGet]
    [Route("get-PressAd")]
    public async Task<ActionResult<PagedResult<AwardAndEventDto>>> GetPressAd([FromQuery] QueryParams queryParams)
    {
        var AwardAndEvents = await _mediator.Send(new GetPressAdListRequest { QueryParams = queryParams });
        return Ok(AwardAndEvents);
    }


}

