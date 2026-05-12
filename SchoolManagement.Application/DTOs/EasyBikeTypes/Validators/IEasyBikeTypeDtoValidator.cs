using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.GoodSales.Validators
{
    public class IEasyBikeTypeDtoValidator : AbstractValidator<IEasyBikeTypeDto>
    {
        public IEasyBikeTypeDtoValidator() 
        {
            //RuleFor(b => b.Nam)
            //    .NotEmpty().WithMessage("{PropertyName} is required.").MaximumLength(150).WithMessage("{PropertyName} must not exceed {ComparisonValue} characters.");
        }
    }
}
