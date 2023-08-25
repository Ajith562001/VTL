
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace ExcelValidationApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ExcelvalidationController : ControllerBase
	{
		private readonly ExcelValidation _excelValidation;

		public ExcelvalidationController(ExcelValidation excelValidation)
		{
			_excelValidation = excelValidation;
		}

		[HttpPost("ValidateExcel")]
		public ActionResult<IEnumerable<string>> ValidateExcelFile(IFormFile file)
		{
			if (file == null || file.Length <= 0)
			{
				return BadRequest("No file uploaded.");
			}

			List<string> validationErrors = _excelValidation.ValidateExcelFile(file);

			if (validationErrors.Count > 0)
			{
				var responseObjectt = new
				{
					Message = validationErrors
				};

				return BadRequest(responseObjectt);
			}

			var responseObject = new
			{
				Message = "Excel file validation successful.",
			};

			return Ok(responseObject);
		}
	}
}
