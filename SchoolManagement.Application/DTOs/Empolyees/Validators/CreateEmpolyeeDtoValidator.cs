using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.Empolyees.Validators
{
    public class CreateEmpolyeeDtoValidator : AbstractValidator<CreateEmpolyeeDto>
    {
        public CreateEmpolyeeDtoValidator()  
        {
            Include(new IEmpolyeeDtoValidator()); 
        }
    }
}
