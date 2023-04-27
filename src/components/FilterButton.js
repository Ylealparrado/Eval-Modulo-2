import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true" hidden="true">
      <span className="visually-hidden">Show </span>
      <span>Todo </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;