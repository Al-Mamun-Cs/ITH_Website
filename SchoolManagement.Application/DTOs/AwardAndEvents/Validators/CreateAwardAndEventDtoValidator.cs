using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.AwardAndEvents.Validators
{
    public class CreateAwardAndEventDtoValidator : AbstractValidator<CreateAwardAndEventDto>
    {
        public CreateAwardAndEventDtoValidator()  
        {
            Include(new IAwardAndEventDtoValidator()); 
        }
    }
}
