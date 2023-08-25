using System.ComponentModel.DataAnnotations;

namespace ImportApp.Entity
{
	public class ExcelData
	{
		[Key]
		public int id {  get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string DOB { get; set; }
		public string ParentName { get; set; }
		public string Gender { get; set; }
		public string Email { get; set; }
		public string PrimaryPhone { get; set; }
		public string Grade { get; set; }
	}
}
