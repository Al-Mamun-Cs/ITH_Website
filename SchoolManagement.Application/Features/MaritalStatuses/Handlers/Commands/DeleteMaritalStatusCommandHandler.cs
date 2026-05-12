using AutoMapper;
using MediatR;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.Features.MaritalStatuses.Requests.Commands;
using SchoolManagement.Domain;

namespace SchoolManagement.Application.Features.MaritalStatuses.Handlers.Commands
{
    public class DeleteMaritalStatusCommandHandler : IRequestHandler<DeleteMaritalStatusCommand>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DeleteMaritalStatusCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(DeleteMaritalStatusCommand request, CancellationToken cancellationToken)
        {
            var MaritalStatus = await _unitOfWork.Repository<MaritalStatus>().Get(request.MaritalStatusId);

            if (MaritalStatus == null)
                throw new NotFoundException(nameof(MaritalStatus), request.MaritalStatusId);


            try
            {
                await _unitOfWork.Repository<MaritalStatus>().Delete(MaritalStatus);
                await _unitOfWork.Save();
            }
            catch (Exception ex)
            {
                throw new NotFoundException("Data Can not deleted for relational attachment with other Tables!", request.MaritalStatusId);
            }

            return Unit.Value;
        }
    }
}
