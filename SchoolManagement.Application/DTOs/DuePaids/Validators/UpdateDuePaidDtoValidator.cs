using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.DuePaids.Validators
{
    public class UpdateDuePaidDtoValidator : AbstractValidator<DuePaidDto>
    {
        public UpdateDuePaidDtoValidator()
        {
            Include(new IDuePaidDtoValidator());

            RuleFor(b => b.DuePaidId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

