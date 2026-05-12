using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.Managements;
using SchoolManagement.Application.Features.Managements.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.Management)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ManagementController : ControllerBase
{
    private readonly IMediator _mediator;

    public ManagementController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-Managements")]
    public async Task<ActionResult<PagedResult<ManagementDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var Managements = await _mediator.Send(new GetManagementListRequest { QueryParams = queryParams });
        return Ok(Managements);
    }

    
}

