using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagement.Application.DTOs.Empolyees
{
    public interface IEmpolyeeDto
    {
        public int EmpolyeeId { get; set; }
        public string? PersonalNo { get; set; }
        public string? GPFNo { get; set; }
        public string? GPFPageNo { get; set; }
        public string? SalaryPageNo { get; set; }
        public string? OrcidId { get; set; }
        public int? SalaryGradeId { get; set; }
        public int? SalaryGradePayScaleId { get; set; }
        public int? SalaryGradeStepId { get; set; }
        public DateTime? LastIncrementDate { get; set; }
        public DateTime? LastPromotionDate { get; set; }
        public DateTime? LastTransferDate { get; set; }
        public int? SalaryVolumeId { get; set; }
        public int? GpaVolumeId { get; set; }
        public int? ReligionId { get; set; }
        public int? BloodGroupId { get; set; }
        public int? MaritalStatusId { get; set; }
        public int? GenderId { get; set; }
        public int? ServiceStatusId { get; set; }
        public int? WarehouseId { get; set; }
        public int? WareHouseSubDepartmentId { get; set; }
        public int? DesignationId { get; set; }
        public int? CountryId { get; set; }
        public int? BankId { get; set; }
        public string? BankACNo { get; set; }
        public string? Name { get; set; }
        public string? NameBangla { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? ProvisionPeriod { get; set; }
        public DateTime? ProvisionEndDate { get; set; }
        public DateTime? RetirementDate { get; set; }
        public string? PlaceOfBirth { get; set; }
        public DateTime? JoiningDate { get; set; }
        public DateTime? FirstJoiningDate { get; set; }
        public DateTime? JoiningDateInBMU { get; set; }
        public bool? FreedomFighter { get; set; }
        public string? FreedomFighterNo { get; set; }
        public string? TinNo { get; set; }
        public string? TinNoImage { get; set; }
        public string? MobileNoPersonal { get; set; }
        public string? EmailAddressPersonal { get; set; }
        public decimal? SalaryAmount { get; set; }
        public string? PhoneNo { get; set; }
        public string? EmailAddress { get; set; }
        public string? NidNo { get; set; }
        public string? Image { get; set; }
        public string? Remarks { get; set; }
        public DateTime? DailyAttendanceDate { get; set; }
        public bool? AttendenceSheeptingType { get; set; }
        public TimeSpan? OfficeTimeIn { get; set; }
        public TimeSpan? OfficeTimeOut { get; set; }
        public TimeSpan? DailyAttendanceTime { get; set; }
        public TimeSpan? lateTime { get; set; }
        public TimeSpan? DailyAttendanceOutTime { get; set; }
        public int? Status { get; set; }
        public bool? UserCreateStaus { get; set; }
        public bool? IsWebsite { get; set; }
        public bool IsActive { get; set; }
    } 
}
