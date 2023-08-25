using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace ExcelValidationApi
{
	public class ExcelValidation
	{
		public List<string> ValidateExcelFile(IFormFile file)
		{
			List<string> validationErrors = new List<string>();

			try
			{
				ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

				using (var package = new ExcelPackage(file.OpenReadStream()))
				{
					var worksheet = package.Workbook.Worksheets[0];
					//List<string[]> errors = new List<string[]>();
					//errors.AddRange(ValidateEmptyFile());

					ValidateEmptyFile(worksheet, validationErrors);
					ValidateSingleSheet(package, validationErrors);
					ValidateColumnHeaders(worksheet, validationErrors);
					ValidateMandatoryColumns(worksheet,validationErrors);
					ValidateDuplicateData(worksheet, worksheet.Dimension.Rows, validationErrors);
					//ValidateFormulas(worksheet, validationErrors);
				}
			}
			catch (Exception ex)
			{
				validationErrors.Add($"Error: {ex.Message}");
			}

			return validationErrors;
		}

		private void ValidateEmptyFile(ExcelWorksheet worksheet, List<string> errors)
		{
			if (worksheet.Dimension == null || worksheet.Dimension.Rows <= 1)
			{
				errors.Add("Excel file is empty or contains only headers.");
			}
		}

		private void ValidateSingleSheet(ExcelPackage package, List<string> errors)
		{
			if (package.Workbook.Worksheets.Count != 1)
			{
				errors.Add("Excel file must contain only one sheet.");
			}
		}


		private void ValidateColumnHeaders(ExcelWorksheet worksheet, List<string> errors)
		{
			List<string> expectedHeaders = new List<string> { "First Name", "Last Name", "Birthdate", "Parent or Guardian", "Gender", "Primary Phone", "Email", "Grade" };

			for (int col = 1; col <= worksheet.Dimension.Columns; col++)
			{
				string actualHeader = worksheet.Cells[1, col].Text;

				if (!expectedHeaders.Contains(actualHeader))
				{
					errors.Add($"Column '{actualHeader}' is unexpected.");
				}
			}
		}

		private void ValidateMandatoryColumns(ExcelWorksheet worksheet,  List<string> errors)
		{
			List<string> mandatoryColumns = new List<string> { "First Name", "Last Name", "Birthdate", "Parent or Guardian", "Gender", "Primary Phone", "Email", "Grade" };

			foreach (string columnName in mandatoryColumns)
			{
				int columnIndex = FindColumnIndex(worksheet, columnName);

				if (columnIndex == -1)
				{
					errors.Add($"Mandatory column '{columnName}' is missing.");
				}
			}
		}

		int FindColumnIndex(ExcelWorksheet worksheet, string columnName)
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


		private void ValidateDuplicateData(ExcelWorksheet worksheet, int rowCount, List<string> errors)
		{
			HashSet<string> uniqueData = new HashSet<string>();

			for (int row = 2; row <= rowCount; row++) 
			{
				List<string> rowData = new List<string>();

				for (int col = 1; col <= worksheet.Dimension.Columns; col++)
				{
					rowData.Add(worksheet.Cells[row, col].Text);
				}

				string rowDataStr = string.Join("|", rowData);

				if (!uniqueData.Add(rowDataStr))
				{
					errors.Add($"Duplicate data found in row {row}.");
				}
			}
		}

		//private void ValidateFormulas(ExcelWorksheet worksheet, List<string> errors)
		//{
		//	for (int row = 2; row <= worksheet.Dimension.Rows; row++)
		//	{
		//		for (int col = 1; col <= worksheet.Dimension.Columns; col++)
		//		{
		//			string cellFormula = worksheet.Cells[row, col].Formula;

		//			if (!string.IsNullOrEmpty(cellFormula))
		//			{
		//				if (!IsValidFormula(cellFormula))
		//				{
		//					errors.Add($"Invalid formula in cell [{row}, {col}].");
		//				}
		//			}
		//		}
		//	}
		//}

		//private bool IsValidFormula(string formula)
		//{
		//	try
		//	{
		//		using (var package = new ExcelPackage())
		//		{
		//			var worksheet = package.Workbook.Worksheets.Add("Sheet1");
		//			worksheet.Cells[1, 1].Formula = formula;
		//			worksheet.Calculate();
		//			return true;
		//		}
		//	}
		//	catch (Exception)
		//	{
		//		return false;
		//	}
		//}


	}
}
