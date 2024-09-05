import React, { useState } from "react";
import FilterDropdown from "./FilterDropDown";
import "../style/SearchBar.css";

const SearchBar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    level: [],
  });

  const handleRemoveFilter = (category, filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].filter((item) => item !== filter),
    }));
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-row">
        <div className="input-wrapper">
          <input placeholder="Search" />
        </div>
        <div className="filter-dropdown-container">
          <FilterDropdown
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
      </div>
      <div className="selected-filters">
        {Object.entries(selectedFilters).map(([category, filters]) =>
          filters.map((filter) => (
            <button
              key={`${category}-${filter}`}
              className="filter-button"
              onClick={() => handleRemoveFilter(category, filter)}
            >
              {filter}
              <span className="filter-close">✕</span>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
