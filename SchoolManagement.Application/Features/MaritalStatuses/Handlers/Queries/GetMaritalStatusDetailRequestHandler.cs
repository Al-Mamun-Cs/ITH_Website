using AutoMapper;
using MediatR;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.DTOs.MaritalStatuses;
using SchoolManagement.Application.Features.MaritalStatuses.Requests.Queries;
using SchoolManagement.Domain;

namespace SchoolManagement.Application.Features.MaritalStatuses.Handlers.Queries
{
    public class GetMaritalStatusDetailRequestHandler : IRequestHandler<GetMaritalStatusDetailRequest, MaritalStatusDto>
    {
        private readonly IMapper _mapper;
        private readonly ISchoolManagementRepository<MaritalStatus> _MaritalStatusRepository;
        public GetMaritalStatusDetailRequestHandler(ISchoolManagementRepository<MaritalStatus> MaritalStatusRepository, IMapper mapper)
        {
            _MaritalStatusRepository = MaritalStatusRepository;
            _mapper = mapper;
        }
        public async Task<MaritalStatusDto> Handle(GetMaritalStatusDetailRequest request, CancellationToken cancellationToken)
        {
            var MaritalStatus = await _MaritalStatusRepository.Get(request.MaritalStatusId);
            return _mapper.Map<MaritalStatusDto>(MaritalStatus);
        }
    }
}
