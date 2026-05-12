using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.MaritalStatuses
{
    public class CreateMaritalStatusDto : IMaritalStatusDto
    {
        public int MaritalStatusId { get; set; }
        public string? FullName { get; set; }
        public string? ShortName { get; set; }
        public bool IsActive { get; set; }
    }
}
