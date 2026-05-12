using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.TvcVideos.Validators
{
    public class UpdateTvcVideoDtoValidator : AbstractValidator<TvcVideoDto>
    {
        public UpdateTvcVideoDtoValidator()
        {
            Include(new ITvcVideoDtoValidator());

            RuleFor(b => b.TvcVideoId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

