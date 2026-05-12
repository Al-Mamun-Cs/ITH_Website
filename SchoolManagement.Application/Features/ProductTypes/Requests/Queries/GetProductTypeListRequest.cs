using MediatR;
using SchoolManagement.Application.DTOs.Common;
using SchoolManagement.Application.DTOs.ProductTypes;
using SchoolManagement.Application.Models;

namespace SchoolManagement.Application.Features.ProductTypes.Requests.Queries
{
    public class GetProductTypeListRequest : IRequest<PagedResult<ProductTypeDto>>
    {
        public QueryParams QueryParams { get; set; }
        public int WarehouseId { get; set; }
    }
}
