using MediatR;
using SchoolManagement.Shared.Models;
using System.Collections.Generic;

namespace SchoolManagement.Application.Features.EasyBikeTypes.Requests.Queries
{
    public class GetSelectedCategoryByProductionRequest : IRequest<List<SelectedModel>>
    {
        //public int ItemProductionTypeId { get; set; }
    }
}
