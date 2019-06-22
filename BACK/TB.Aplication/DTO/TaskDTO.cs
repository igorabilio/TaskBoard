using System;

namespace TB.Aplication.DTO
{
    public class TaskDTO : BaseDTO
    {
        public Guid ProjectId { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public string Status { get; set; }
        public Guid AssignedTo { get; set; }
    }
}
