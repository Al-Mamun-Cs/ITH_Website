using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.ProductTypes.Validators
{
    public class CreateProductTypeDtoValidator : AbstractValidator<CreateProductTypeDto>
    {
        public CreateProductTypeDtoValidator()  
        {
            Include(new IProductTypeDtoValidator()); 
        }
    }
}
