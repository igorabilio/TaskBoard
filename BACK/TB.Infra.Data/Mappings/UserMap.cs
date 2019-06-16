using TB.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TB.Infra.Data.Mappings
{
    public class UserMap : BaseMap<User>
    {
        public override void Configure(EntityTypeBuilder<User> builder)
        {
            base.Configure(builder);

            builder.ToTable("user");

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasMaxLength(150);

            builder.Property(c => c.Username)
                .IsRequired()
                .HasColumnName("username")
                .HasMaxLength(150);

            builder.Property(c => c.Email)
                .IsRequired()
                .HasColumnName("email")
                .HasMaxLength(300);

            builder.Property(c => c.Status)
                .IsRequired()
                .HasColumnName("status")
                .HasMaxLength(1);
        }
    }
}
