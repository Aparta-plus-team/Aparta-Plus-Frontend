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
  disabled,  
}) {
  const [ShowPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container" style={{ width: width }}>
      <h1>{content}</h1>
      <div className="flex items-center">
        <input
          type={isPassword && !ShowPassword ? "password" : "text"}
          className="input"
          placeholder={placeholder} 
          value={value}
          onChange={(e) => {
            if (!disabled) {
              onChange(e.target.value);  
            }
          }}
          disabled={disabled} 
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
  disabled: PropTypes.bool, 
};
