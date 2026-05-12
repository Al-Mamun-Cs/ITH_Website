using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.GoodSales.Validators
{
    public class UpdateEasyBikeTypeDtoValidator : AbstractValidator<EasyBikeTypeDto>
    {
        public UpdateEasyBikeTypeDtoValidator()
        {
            Include(new IEasyBikeTypeDtoValidator());

            RuleFor(b => b.EasyBikeTypeId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

