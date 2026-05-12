using SchoolManagement.Application;
using SchoolManagement.Application.DTOs.GoodSales;
using SchoolManagement.Application.Features.Countrys.Requests.Queries;
using SchoolManagement.Application.Features.EasyBikeTypes.Requests.Queries;
using SchoolManagement.Application.Models;
using SchoolManagement.Domain;
using SchoolManagement.Persistence.subroto;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Api.Controllers;

//[Route(SMSRoutePrefix.EasyBikeTypes)]
//[ApiController]
//[Authorize]
[Route("api/[controller]")]
[ApiController]
public class EasyBikeTypeController : ControllerBase
{
    private readonly IMediator _mediator;

    public EasyBikeTypeController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [Route("get-EasyBikeTypes")]
    public async Task<ActionResult<PagedResult<EasyBikeTypeDto>>> Get([FromQuery] QueryParams queryParams)
    {
        var EasyBikeTypes = await _mediator.Send(new GetEasyBikeTypeListRequest { QueryParams = queryParams });
        return Ok(EasyBikeTypes);
    }

    [HttpGet]
    [Route("get-selectedCategory")]
    public async Task<ActionResult<List<SelectedModel>>> getselectedCategory()
    {
        var selectedCategory = await _mediator.Send(new GetSelectedCategoryByProductionRequest { });
        return Ok(selectedCategory);
    }

}

