using static SchoolManagement.Shared.Constants;

namespace SchoolManagement.Application
{
    public static class SMSRoutePrefix
    {
        private const string SMSRoutePrefixBase = ApiRoutePrefix.RoutePrefixBase + "sms/";

        public const string Branch = SMSRoutePrefixBase + "branch";
    }
} 
