using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.Suppliers;
using SchoolManagement.Application.Features.Suppliers.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.Supplier)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class SupplierController : ControllerBase
{
    private readonly IMediator _mediator;
    public SupplierController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-suppliers")]
    public async Task<ActionResult<PagedResult<SupplierDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var Suppliers = await _mediator.Send(new GetSupplierListRequest 
        { 
            QueryParams = queryParams
        });
        return Ok(Suppliers);
    }

    
}

