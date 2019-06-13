using TB.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TB.Infra.Data.Mappings
{
    public class ProjectMap : BaseMap<Project>
    {
        public override void Configure(EntityTypeBuilder<Project> builder)
        {
            base.Configure(builder);

            builder.ToTable("project");

            builder.Property(c => c.Code)
                .IsRequired()
                .HasColumnName("code")
                .HasMaxLength(10);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasMaxLength(150);

            builder.Property(c => c.Description)
                .HasColumnName("description")
                .HasMaxLength(300);

            builder.Property(c => c.DueDate)
                .HasColumnName("due_date");

            builder.Property(c => c.Owner)
                .IsRequired()
                .HasColumnName("owner");
        }
    }
}
