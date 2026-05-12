using MediatR;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Features.EasyBikeTypes.Requests.Queries;
using SchoolManagement.Domain;
using SchoolManagement.Shared.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SchoolManagement.Application.Features.EasyBikeTypes.Handlers.Queries
{
    public class GetSelectedCategoryByProductionAndFinishRequestHandler : IRequestHandler<GetSelectedCategoryByProductionRequest, List<SelectedModel>>
    {
        private readonly ISchoolManagementRepository<EasyBikeType> _EasyBikeTypeRepository;


        public GetSelectedCategoryByProductionAndFinishRequestHandler(ISchoolManagementRepository<EasyBikeType> EasyBikeTypeRepository)
        {
            _EasyBikeTypeRepository = EasyBikeTypeRepository;
        }

        public async Task<List<SelectedModel>> Handle(GetSelectedCategoryByProductionRequest request, CancellationToken cancellationToken)
        {
            ICollection<EasyBikeType> codeValues = await _EasyBikeTypeRepository.FilterAsync(x => x.ItemProductionTypeId == 2 && x.IsWebsite == true);
            List<SelectedModel> selectModels = codeValues.Select(x => new SelectedModel
            {
                Text = x.TypeName,
                Value = x.EasyBikeTypeId
            }).ToList();
            return selectModels;
        }
    }
}
