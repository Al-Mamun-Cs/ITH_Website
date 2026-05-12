using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.GoodSales.Validators
{
    public class CreateEasyBikeTypeDtoValidator : AbstractValidator<CreateEasyBikeTypeDto>
    {
        public CreateEasyBikeTypeDtoValidator()  
        {
            Include(new IEasyBikeTypeDtoValidator()); 
        }
    }
}
