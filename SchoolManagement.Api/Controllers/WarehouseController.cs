using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.Warehouses;
using SchoolManagement.Application.Features.Warehouses.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.Warehouse)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class WarehouseController : ControllerBase
{
    private readonly IMediator _mediator;

    public WarehouseController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-Warehouses")]
    public async Task<ActionResult<PagedResult<WarehouseDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var Warehouses = await _mediator.Send(new GetWarehouseListRequest { QueryParams = queryParams });
        return Ok(Warehouses);
    }
    [HttpGet]
    [Route("get-WarehouseForMenu")]
    public async Task<ActionResult<PagedResult<WarehouseDto>>> GetForMenu([FromQuery] QueryParams queryParams)
    {
        var Warehouses = await _mediator.Send(new GetWarehouseListForMenuRequest { QueryParams = queryParams });
        return Ok(Warehouses);
    }

    [HttpGet]
    [Route("get-WarehouseListByWarehouseId")]
    public async Task<ActionResult<PagedResult<WarehouseDto>>> GetByWarehouseId([FromQuery] QueryParams queryParams,int warehouseId)
    {
        var Warehouses = await _mediator.Send(new GetWarehouseListByWarehouseIdRequest { QueryParams = queryParams, WarehouseId = warehouseId });
        return Ok(Warehouses);
    }



}

