import React from 'react';

const Filter = ({ filterTitle, filterRate, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => onFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRate}
        onChange={(e) => onFilterChange('rate', e.target.value)}
      />
    </div>
  );
};

export default Filter;
