﻿using AdmissionsCommittee.Core.Domain.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HandbookActivity.Core.Domain;

namespace AdmissionsCommittee.Core.Data
{
    public interface IRepository<T>
    {
        public Task<T> CreateAsync(T entity);
        public Task<IEnumerable<T>> CreateManyAsync(IEnumerable<T> entities);

        public Task<T> UpdateAsync(T entity);
        public Task<IEnumerable<T>> UpdateManyAsync(IEnumerable<T> entities);
        public Task DeleteAsync(T entity);
        public Task DeleteByIdAsync(int id);

        public Task<T> GetByIdAsync(int id);
        public Task<IEnumerable<T>> GetAllAsync();
        public Task<IEnumerable<T>> GetManyByIdAsync(IEnumerable<int> ids, string columnName);

        public Task<Page<T>> PaginateAsync(PaginationFilter paginationFilter,
            SortFilter sortFilter, DynamicFilters dynamicFilters);

        //public Task<bool> EntitiesAreExist(IEnumerable<int> ids, string idName);
    }
}
