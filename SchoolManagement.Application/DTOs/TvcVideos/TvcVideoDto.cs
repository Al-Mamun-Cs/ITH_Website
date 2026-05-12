using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.TvcVideos
{
    public class TvcVideoDto : ITvcVideoDto
    {
        public int TvcVideoId { get; set; }
        public string? VideoDoc { get; set; }
        public string? Name { get; set; }
        public string? Descriptions { get; set; }
        public DateTime? Date { get; set; }
        public bool? IsWebsite { get; set; }
        public bool? IsEshop { get; set; }
    }
}
