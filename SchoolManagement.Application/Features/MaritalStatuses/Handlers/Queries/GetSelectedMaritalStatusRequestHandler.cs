using MediatR;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Features.MaritalStatuses.Requests.Queries;
using SchoolManagement.Domain;
using SchoolManagement.Shared.Models;

namespace SchoolManagement.Application.Features.MaritalStatuses.Handlers.Queries
{
    public class GetSelectedMaritalStatusRequestHandler : IRequestHandler<GetSelectedMaritalStatusRequest, List<SelectedModel>>
    {
        private readonly ISchoolManagementRepository<MaritalStatus> _MaritalStatusRepository;


        public GetSelectedMaritalStatusRequestHandler(ISchoolManagementRepository<MaritalStatus> MaritalStatusRepository)
        {
            _MaritalStatusRepository = MaritalStatusRepository;
        }

        public async Task<List<SelectedModel>> Handle(GetSelectedMaritalStatusRequest request, CancellationToken cancellationToken)
        {
            ICollection<MaritalStatus> codeValues = await _MaritalStatusRepository.FilterAsync(x => x.IsActive);
            List<SelectedModel> selectModels = codeValues.Select(x => new SelectedModel
            {
                Text = x.FullName,
                Value = x.MaritalStatusId
            }).ToList();
            return selectModels;
        }
    }
}
