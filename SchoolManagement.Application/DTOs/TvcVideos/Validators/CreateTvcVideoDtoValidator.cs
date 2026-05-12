using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.TvcVideos.Validators
{
    public class CreateTvcVideoDtoValidator : AbstractValidator<CreateTvcVideoDto>
    {
        public CreateTvcVideoDtoValidator()  
        {
            Include(new ITvcVideoDtoValidator()); 
        }
    }
}
