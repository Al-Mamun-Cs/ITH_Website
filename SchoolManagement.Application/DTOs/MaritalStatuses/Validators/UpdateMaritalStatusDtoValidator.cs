using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.MaritalStatuses.Validators
{
    public class UpdateMaritalStatusDtoValidator : AbstractValidator<MaritalStatusDto>
    {
        public UpdateMaritalStatusDtoValidator()
        {
            Include(new IMaritalStatusDtoValidator());

            RuleFor(b => b.MaritalStatusId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

