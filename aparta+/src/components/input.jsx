

import "+/input.component.scss";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Input({
  value,
  content,
  width,
  onChange,
  isPassword,
  placeholder, 
}) {
  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container" style={{ width: width }}>
      <h1>{content}</h1>
      <div className="flex items-center">
        <input
          type={ShowPassword ? "password" : "text"}
          className="input"
          placeholder={placeholder} // Usa el placeholder proporcionado o el valor predeterminado
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        {isPassword ? (
          <span
            className="material-symbols-outlined cursor-pointer relative right-9 text-gray-400"
            onClick={() => setShowPassword(!ShowPassword)}
          >
            visibility{ShowPassword ? "" : "_off"}
          </span>
        ) : null}
      </div>
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  isPassword: PropTypes.bool,
  placeholder: PropTypes.string, 
};
