using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TB.Domain.Entities;

namespace TB.Infra.Data.Mappings
{
    public class TaskMap : BaseMap<Task>
    {
        public override void Configure(EntityTypeBuilder<Task> builder)
        {
            base.Configure(builder);

            builder.ToTable("task");

            builder.Property(c => c.ProjectId)
                .HasColumnName("project_id");

            builder.Property(c => c.Code)
                .IsRequired()
                .HasColumnName("code")
                .HasMaxLength(10);

            builder.Property(c => c.Name)
                .IsRequired()
                .HasColumnName("name")
                .HasMaxLength(150);

            builder.Property(c => c.Description)
                .IsRequired()
                .HasColumnName("description")
                .HasMaxLength(500);

            builder.Property(c => c.DueDate)
                .IsRequired()
                .HasColumnName("due_date");

            builder.Property(c => c.Status)
                .IsRequired()
                .HasColumnName("status")
                .HasMaxLength(1);

            builder.Property(c => c.AssignedTo)
                .IsRequired()
                .HasColumnName("assigned_to");
        }
    }
}
