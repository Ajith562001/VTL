using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using ImportApp.Entity;

namespace ImportApp.Service
{


	public class ExcelReader
	{
		//private readonly ApplicationDbContext _context;

		//public ExcelReader(ApplicationDbContext context)
		//{
		//	_context = context;
		//}

		public Dictionary<string, List<string>> ReadColumnsDataFromExcel(IFormFile file, List<string> columnNames)
		{
			ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

			Dictionary<string, List<string>> columnDataDict = new Dictionary<string, List<string>>();

			using (var package = new ExcelPackage(file.OpenReadStream()))
			{
				var worksheet = package.Workbook.Worksheets[0];

				foreach (string columnName in columnNames)
				{
					int columnIndex = FindColumnIndex(worksheet, columnName);

					if (columnIndex != -1)
					{
						List<string> columnData = new List<string>();
						int rowCount = worksheet.Dimension.Rows;
						for (int row = 2; row <= rowCount; row++)
						{
							string cellValue = worksheet.Cells[row, columnIndex].Text;
							columnData.Add(cellValue);
						}
						columnDataDict[columnName] = columnData;
					}
					else
					{
						Console.WriteLine($"Column '{columnName}' not found in the Excel file.");
					}
				}
			}

			return columnDataDict;
		}

		public int FindColumnIndex(ExcelWorksheet worksheet, string columnName)
		{
			int columnIndex = -1;
			int headerRow = 1;
			int colCount = worksheet.Dimension.Columns;

			for (int col = 1; col <= colCount; col++)
			{
				if (worksheet.Cells[headerRow, col].Text.Equals(columnName, StringComparison.OrdinalIgnoreCase))
				{
					columnIndex = col;
					break;
				}
			}

			return columnIndex;
		}

		//public Dictionary<string, List<string>> ProcessExcelData(IFormFile file, List<string> columnNames)
		//{
		//	ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

		//	Dictionary<string, List<string>> columnDataDict = ReadColumnsDataFromExcel(file, columnNames);

		//	return columnDataDict;
		//}

		//public void ImportDataToDatabase(Dictionary<string, List<string>> columnDataDict)
		//{
		//	List<string> nameData = columnDataDict["Name"];
		//	List<string> descriptionData = columnDataDict["Description"];

		//	for (int i = 0; i < nameData.Count; i++)
		//	{
		//		string name = nameData[i];
		//		string description = descriptionData[i];

		//		_context.ImportedData.Add(new ImportData
		//		{
		//			Name = name,
		//			Description = description,
		//		});
		//	}

		//	_context.SaveChanges();
		//}




	}
}
