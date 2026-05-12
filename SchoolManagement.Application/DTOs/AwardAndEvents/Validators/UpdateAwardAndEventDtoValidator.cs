using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.AwardAndEvents.Validators
{
    public class UpdateAwardAndEventDtoValidator : AbstractValidator<AwardAndEventDto>
    {
        public UpdateAwardAndEventDtoValidator()
        {
            Include(new IAwardAndEventDtoValidator());

            RuleFor(b => b.AwardAndEventId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

