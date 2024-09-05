import React, { useState } from "react"; // Import useState
import "../style/FilterDropDown.css";

function FilterDropdown({ selectedFilters, setSelectedFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const isValueSelected = prevFilters[category].includes(value);
      const newCategoryFilters = isValueSelected
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return {
        ...prevFilters,
        [category]: newCategoryFilters,
      };
    });
  };

  return (
    <div className="filter-dropdown">
      <button className="filter-btn" onClick={toggleDropdown}>
        Filter {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-sectionfilter">
            <h4>Status</h4>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("All")}
                onChange={() => handleCheckboxChange("status", "All")}
              />
              All
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("Active")}
                onChange={() => handleCheckboxChange("status", "Active")}
              />
              Active
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("Upcoming")}
                onChange={() => handleCheckboxChange("status", "Upcoming")}
              />
              Upcoming
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.status.includes("Past")}
                onChange={() => handleCheckboxChange("status", "Past")}
              />
              Past
            </label>
          </div>
          <hr />
          <div className="dropdown-sectionfilter">
            <h4>Level</h4>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.level.includes("Easy")}
                onChange={() => handleCheckboxChange("level", "Easy")}
              />
              Easy
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.level.includes("Medium")}
                onChange={() => handleCheckboxChange("level", "Medium")}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.level.includes("Hard")}
                onChange={() => handleCheckboxChange("level", "Hard")}
              />
              Hard
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
