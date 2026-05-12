using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.TvcVideos;
using SchoolManagement.Application.Features.TvcVideos.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.TvcVideo)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class TvcVideoController : ControllerBase
{
    private readonly IMediator _mediator;

    public TvcVideoController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-TvcVideos")]
    public async Task<ActionResult<PagedResult<TvcVideoDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var TvcVideos = await _mediator.Send(new GetTvcVideoListRequest { QueryParams = queryParams });
        return Ok(TvcVideos);
    }


    
}

