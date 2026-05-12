using SchoolManagement.Domain;
using AutoMapper;
using MediatR;
using SchoolManagement.Application.Exceptions;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.Features.MaritalStatuses.Requests.Commands;
using SchoolManagement.Application.DTOs.MaritalStatuses.Validators;

namespace SchoolManagement.Application.Features.MaritalStatuses.Handlers.Commands
{
    public class UpdateMaritalStatusCommandHandler : IRequestHandler<UpdateMaritalStatusCommand, Unit>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public UpdateMaritalStatusCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateMaritalStatusCommand request, CancellationToken cancellationToken)
        {
            var validator = new UpdateMaritalStatusDtoValidator();
            var validationResult = await validator.ValidateAsync(request.MaritalStatusDto);

            if (validationResult.IsValid == false)
                throw new ValidationException(validationResult);

            var MaritalStatus = await _unitOfWork.Repository<MaritalStatus>().Get(request.MaritalStatusDto.MaritalStatusId);

            if (MaritalStatus is null)
                throw new NotFoundException(nameof(MaritalStatus), request.MaritalStatusDto.MaritalStatusId);

            _mapper.Map(request.MaritalStatusDto, MaritalStatus);

            await _unitOfWork.Repository<MaritalStatus>().Update(MaritalStatus);
            await _unitOfWork.Save();

            return Unit.Value;
        }
    }
}
