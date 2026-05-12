using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.Empolyees;
using SchoolManagement.Application.Features.Empolyees.Requests.Queries;
using SchoolManagement.Application.Features.Upozilas.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.Empolyee)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class EmpolyeeController : ControllerBase
{
    private readonly IMediator _mediator;

    public EmpolyeeController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-empolyees")]
    public async Task<ActionResult<PagedResult<EmpolyeeDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var Empolyees = await _mediator.Send(new GetEmpolyeeListRequest { QueryParams = queryParams});
        return Ok(Empolyees);
    }

    


}

