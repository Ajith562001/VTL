using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ImportApp.Entity
{
    public class ApplicationDbContext :DbContext
    {
        private string? connectionString;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {
            }

      

        public DbSet<ImportData> ImportedData { get; set; }

        public DbSet<ExcelData> ExcelData { get; set; }
        }
    }


