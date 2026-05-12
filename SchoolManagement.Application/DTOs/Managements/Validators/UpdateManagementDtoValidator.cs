using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.Managements.Validators
{
    public class UpdateManagementDtoValidator : AbstractValidator<ManagementDto>
    {
        public UpdateManagementDtoValidator()
        {
            Include(new IManagementDtoValidator());

            RuleFor(b => b.ManagementId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

