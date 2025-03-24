import React, { useState } from "react";

const SelectComponent = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("bg-white");

  const colorMap = {
    option1: "bg-green-500",
    option2: "bg-red-500",
  
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);

    setBackgroundColor(colorMap[value] || "bg-white");
  };

  const options = [
    { value: "option1", label: "Придатні" },
    { value: "option2", label: "Не придатні" },

  ];

  return (
    <div className={`${backgroundColor} text-center p-2 transition-colors duration-300`}>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="text-center align-center"
      >
        <option value="">Виберіть опцію</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
