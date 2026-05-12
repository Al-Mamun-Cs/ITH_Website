using AutoMapper;
using MediatR;
using SchoolManagement.Application.Contracts.Persistence;
using SchoolManagement.Application.DTOs.WebsiteCVs.Validators;
using SchoolManagement.Application.Features.WebsiteCVs.Requests.Commands;
using SchoolManagement.Application.Responses;
using SchoolManagement.Domain;

namespace SchoolManagement.Application.Features.WebsiteCVs.Handlers.Commands
{
    public class CreateWebsiteCVCommandHandler : IRequestHandler<CreateWebsiteCVCommand, BaseCommandResponse>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public CreateWebsiteCVCommandHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<BaseCommandResponse> Handle(CreateWebsiteCVCommand request, CancellationToken cancellationToken)
        {
            var response = new BaseCommandResponse();
            var validator = new CreateWebsiteCVDtoValidator();
            var validationResult = await validator.ValidateAsync(request.WebsiteCVDto);

            if (validationResult.IsValid == false)
            {
                response.Success = false;
                response.Message = "Creation Failed";
                response.Errors = validationResult.Errors.Select(q => q.ErrorMessage).ToList();
            }
            else
            {
                /////// Image Upload //////////
                string uniqueFileName = null;
                //// this method for Server Pc
                if (request.WebsiteCVDto.Doc != null)
                {
                    var fileName = Path.GetFileName(request.WebsiteCVDto.Doc.FileName);
                    uniqueFileName = Guid.NewGuid() + "_" + fileName;

                    var uploadRoot = @"D:\Content\files\website-cvs";

                    if (!Directory.Exists(uploadRoot))
                    {
                        Directory.CreateDirectory(uploadRoot);
                    }

                    var filePath = Path.Combine(uploadRoot, uniqueFileName);

                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await request.WebsiteCVDto.Doc.CopyToAsync(fileStream);
                    }
                }

                //// this method for Local Pc
                //if (request.WebsiteCVDto.Doc != null)
                //{

                //    var fileName = Path.GetFileName(request.WebsiteCVDto.Doc.FileName);
                //    uniqueFileName = Guid.NewGuid().ToString() + "_" + fileName;
                //    var a = Directory.GetCurrentDirectory();
                //    var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Content\\files\\website-cvs", uniqueFileName);
                //    using (var fileSteam = new FileStream(filePath, FileMode.Create))
                //    {
                //        await request.WebsiteCVDto.Doc.CopyToAsync(fileSteam);
                //    }


                //}
                var WebsiteCV = _mapper.Map<WebsiteCV>(request.WebsiteCVDto);
                WebsiteCV.DocumentFile = request.WebsiteCVDto.DocumentFile ?? "files/website-cvs/" + uniqueFileName;
                WebsiteCV = await _unitOfWork.Repository<WebsiteCV>().Add(WebsiteCV);
                try
                {
                    await _unitOfWork.Save();
                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex);
                }
                //await _unitOfWork.Save();


                response.Success = true;
                response.Message = "Creation Successful";
                response.Id = WebsiteCV.WebsiteCVId;
            }

            return response;
        }
    }
}
