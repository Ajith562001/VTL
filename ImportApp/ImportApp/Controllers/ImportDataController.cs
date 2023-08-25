using ImportApp.Entity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
using OfficeOpenXml;
using ExcelDataReader;
//using ImportApp.Migrations;
using ImportApp.Entity;
using ImportApp.Service;
using System.Reflection;
using System.Diagnostics;
using Microsoft.IdentityModel.Tokens;
//using System.Web.Http;



namespace ExcelImportAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ImportDataController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		private readonly ApplicationDbContext context;

		private readonly ExcelReader excelReader;

		public ImportDataController(IConfiguration configuration, ApplicationDbContext _context ,ExcelReader _excelReader)
		{
			_configuration = configuration;
			context = _context;
			excelReader = _excelReader;
		}

	
			[HttpPost]
			[Route("ImportExcel")]
			public IActionResult ImportExcel(IFormFile file)
			{

			try
			{
				ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

				List<string> columnNames = new List<string> { "First Name", "Last Name", "Birthdate", "Parent or Guardian", "Gender", "Primary Phone", "Email", "Grade" };
				Dictionary<string, List<string>> columnDataDict = excelReader.ReadColumnsDataFromExcel(file, columnNames);

				List<string> firstname = columnDataDict["First Name"];
				List<string> lastname = columnDataDict["Last Name"];
				List<string> dob = columnDataDict["Birthdate"];
				List<string> parent = columnDataDict["Parent or Guardian"];
				List<string> gender = columnDataDict["Gender"];
				List<string> pphone = columnDataDict["Primary Phone"];
				List<string> email = columnDataDict["Email"];
				List<string> grade = columnDataDict["Grade"];

				for (int i = 0; i < firstname.Count; i++)
				{
					string ptfname = firstname[i];
					string ptlname = lastname[i];
					string ptdobb = dob[i];
					string ptparent = parent[i];
					string ptgender = gender[i];
					string ptpphone = pphone[i];
					string ptemail = email[i];
					string ptgrade = grade[i];



					context.ExcelData.Add(new ExcelData
					{
						FirstName = string.IsNullOrEmpty(ptfname) ? "No Data" : ptfname,
						LastName = string.IsNullOrEmpty(ptlname) ? "No Data" : ptlname,
						DOB = string.IsNullOrEmpty(ptdobb) ? "No Data" : ptdobb,
						ParentName = string.IsNullOrEmpty(ptparent) ? "No Data" : ptparent,
						Gender = string.IsNullOrEmpty(ptgender) ? "No Data" : ptgender,
						Email = string.IsNullOrEmpty(ptemail) ? "No Data" : ptemail,
						PrimaryPhone = string.IsNullOrEmpty(ptpphone) ? "No Data" : ptpphone,
						Grade = string.IsNullOrEmpty(ptgrade) ? "No Data" : ptgrade
					});
				}


				context.SaveChanges();

				var responseObject = new
				{
					Message = "Data imported successfully",
				};

				return Ok(responseObject);
			}
			catch (Exception ex)
			{
				return StatusCode(500, $"Error: {ex.Message}");
			}
		}


		//try
		//{
		//	List<string> columnNames = new List<string> { "Name", "Description" };

		//	Dictionary<string, List<string>> columnDataDict = excelReader.ProcessExcelData(file, columnNames);

		//	excelReader.ImportDataToDatabase(columnDataDict);

		//	return Ok("Data imported successfully");
		//}
		//catch (Exception ex)
		//{
		//	return StatusCode(500, $"Error: {ex.Message}");
		//}
	




		[HttpGet]
		public IActionResult GetAll()
		{
			var data = (from a in context.ImportedData
						select a).ToList();

			return Ok(data);
		}

	}
}