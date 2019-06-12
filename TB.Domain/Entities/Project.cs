using System;

namespace TB.Domain.Entities
{
    public class Project : BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public DateTime DueDate { get; set; }

        public Project(Guid id, string code, string name, string description, DateTime dueDate)
        {
            Id = id;
            Code = code;
            Name = name;
            Description = description;
            DueDate = dueDate;
        }

        public Project()
        {

        }
    }
}
