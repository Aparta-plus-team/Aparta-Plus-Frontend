import { useState } from "react";
import PropTypes from "prop-types";
import "+/comboBox.component.scss";

const ComboBox = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="flex flex-col items-left">
      <h1>{'content'}</h1>
      <div className="dropdown-container">
        <div className="flex flex-row items-center" onClick={toggleDropdown}>
          <div className="dropdown-header">
            {selectedOption || "Selecciona una opción"}
          </div>
          <span className="material-symbols-outlined text-3xl static right-10">
            keyboard_arrow_{isOpen ? "up" : "down"}
          </span>
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {options.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ComboBox;

ComboBox.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};
