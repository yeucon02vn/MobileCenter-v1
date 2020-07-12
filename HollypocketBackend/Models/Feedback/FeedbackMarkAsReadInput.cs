using System;

namespace HollypocketBackend.Models
{
    public class FeedbackMarkAsReadInput
    {
        public string Id { get; set; }

        public Boolean IsRead { get; set; }
    }
}
