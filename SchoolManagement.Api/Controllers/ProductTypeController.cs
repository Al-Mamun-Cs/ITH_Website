using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.ProductTypes;
using SchoolManagement.Application.DTOs.Warehouses;
using SchoolManagement.Application.Features.ProductTypes.Requests.Queries;
using SchoolManagement.Application.Features.Warehouses.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.ProductType)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class ProductTypeController : ControllerBase
{
    private readonly IMediator _mediator;

    public ProductTypeController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-ProductTypeListByWarehouseId")]
    public async Task<ActionResult<PagedResult<ProductTypeDto>>> GetByWarehouseId([FromQuery] QueryParams queryParams, int warehouseId)
    {
        var ProductTypes = await _mediator.Send(new GetProductTypeListRequest { QueryParams = queryParams, WarehouseId = warehouseId });
        return Ok(ProductTypes);
    }




}

