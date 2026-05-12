using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
 
namespace SchoolManagement.Application.DTOs.ProductTypes.Validators
{
    public class UpdateProductTypeDtoValidator : AbstractValidator<ProductTypeDto>
    {
        public UpdateProductTypeDtoValidator()
        {
            Include(new IProductTypeDtoValidator());

            RuleFor(b => b.ProductTypeId).NotNull().WithMessage("{PropertyName} must be present");
        }
    }
}

