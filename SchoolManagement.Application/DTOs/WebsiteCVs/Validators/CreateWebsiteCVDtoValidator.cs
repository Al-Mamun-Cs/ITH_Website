using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.WebsiteCVs.Validators
{
    public class CreateWebsiteCVDtoValidator : AbstractValidator<CreateWebsiteCVDto>
    {
        public CreateWebsiteCVDtoValidator()  
        {
            Include(new IWebsiteCVDtoValidator()); 
        }
    }
}
