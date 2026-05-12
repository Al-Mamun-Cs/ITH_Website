using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.Brands;
using SchoolManagement.Application.Features.Brands.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.Brand)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class BrandController : ControllerBase
{
    private readonly IMediator _mediator;

    public BrandController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-Brands")]
    public async Task<ActionResult<PagedResult<BrandDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var Brands = await _mediator.Send(new GetBrandListRequest { QueryParams = queryParams });
        return Ok(Brands);
    }

    

    
}

