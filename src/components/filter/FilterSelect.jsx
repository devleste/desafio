import React, { useEffect, useState } from 'react';
import './FilterSelect.css';

function FilterSelect({ filterValue, filterOptions, filterHandler, filterPlaceholder, filterName }) {
  const [selectedFilterValue, setSelectedFilterValue] = useState(filterValue);

  useEffect(() => {
    setSelectedFilterValue(filterValue);
  }, [filterValue]);
  
  return (
    <div className="filters">
      <label>{filterName}:</label>
      <select
        value={selectedFilterValue}
        onChange={filterHandler}
      >
        <option value="">{filterPlaceholder}</option>
        {filterOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSelect;
