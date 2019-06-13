using System;

namespace TB.Aplication.DTO
{
    public class ProjectDTO : BaseDTO
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public Guid Owner { get; set; }
    }
}
