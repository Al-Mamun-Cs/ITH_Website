using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.Empolyees.Validators
{
    public class UpdateEmpolyeeDtoValidator : AbstractValidator<EmpolyeeDto>
    {
        public UpdateEmpolyeeDtoValidator()
        {
            Include(new IEmpolyeeDtoValidator());

            RuleFor(b => b.EmpolyeeId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

