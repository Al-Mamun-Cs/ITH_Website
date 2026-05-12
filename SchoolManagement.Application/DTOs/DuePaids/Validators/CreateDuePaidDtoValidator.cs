using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.DuePaids.Validators
{
    public class CreateDuePaidDtoValidator : AbstractValidator<CreateDuePaidDto>
    {
        public CreateDuePaidDtoValidator()  
        {
            Include(new IDuePaidDtoValidator()); 
        }
    }
}
