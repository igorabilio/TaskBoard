using System;

namespace TB.Domain.Entities
{
    public class Project : BaseEntity
    {
        public string Code { get; set; }
        public string Name { get; private set; }
        public string Description { get; private set; }
        public DateTime DueDate { get; set; }
        public Guid Owner { get; set; }
        public string Status { get; set; }
    }
}
