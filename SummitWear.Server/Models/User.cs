﻿using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SummitWear.Server.Models
{
        public class User : IdentityUser
        {

            public string? FullName { get; set; }
    }
}
