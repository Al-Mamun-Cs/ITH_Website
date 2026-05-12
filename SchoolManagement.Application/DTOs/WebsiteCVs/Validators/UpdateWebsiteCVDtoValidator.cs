using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.WebsiteCVs.Validators
{
    public class UpdateWebsiteCVDtoValidator : AbstractValidator<WebsiteCVDto>
    {
        public UpdateWebsiteCVDtoValidator()
        {
            Include(new IWebsiteCVDtoValidator());

            RuleFor(b => b.WebsiteCVId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

