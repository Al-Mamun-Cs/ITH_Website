using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.Managements.Validators
{
    public class CreateManagementDtoValidator : AbstractValidator<CreateManagementDto>
    {
        public CreateManagementDtoValidator()  
        {
            Include(new IManagementDtoValidator()); 
        }
    }
}
