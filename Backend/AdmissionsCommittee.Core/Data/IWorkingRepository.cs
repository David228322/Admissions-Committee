﻿using AdmissionsCommittee.Core.Domain;
using SqlKata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdmissionsCommittee.Core.Data
{
    public interface IWorkingRepository : IRepository<Working>
    {
        public Task<IEnumerable<Working>> GetEmployeeWorkingsAsync(int employeeId);
    }
}
