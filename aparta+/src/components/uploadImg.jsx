import React, { useState } from "react";
import PropTypes from "prop-types";
import "+/uploadImg.component.scss"; // Archivo SCSS para estilos

function UploadImg({ variant = "portada", onUpload }) {
  const [previews, setPreviews] = useState([]);

  // Handle file input and preview creation
  const handleFileInput = (e) => {
    const files = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );

    const maxFiles = variant === "portada" ? 1 : 3;
    const selectedFiles = files.slice(0, maxFiles - previews.length);

    const newPreviews = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);

    if (onUpload) {
      onUpload([...previews, ...newPreviews]);
    }
  };

  // Handle image removal
  const handleRemovePreview = (index) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-container-img">
      <label className="upload-box">
        <input
          type="file"
          accept="image/*"
          multiple={variant === "gallery"}
          onChange={handleFileInput}
          style={{ display: "none" }}
        />
        <div className="upload-icon">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 42L31.875 24L40.875 33M12.75 42H35.25C38.9779 42 42 38.9779 42 35.25V24M12.75 42C9.02208 42 6 38.9779 6 35.25V12.75C6 9.02208 9.02208 6 12.75 6H27.375M33 10.5798L37.6018 6M37.6018 6L42 10.3728M37.6018 6V17.25M19.5 16.125C19.5 17.989 17.989 19.5 16.125 19.5C14.261 19.5 12.75 17.989 12.75 16.125C12.75 14.261 14.261 12.75 16.125 12.75C17.989 12.75 19.5 14.261 19.5 16.125Z"
              stroke="#094152"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="upload-text">
          {variant === "portada"
            ? "Sube tu imagen de portada"
            : "Sube hasta 3 imágenes"}
        </p>
      </label>

      {/* Previews */}
      <div className="upload-previews">
        {previews.map((preview, index) => (
          <div key={index} className="preview-container">
            <img
              src={preview.url}
              alt={`Preview ${index}`}
              className="preview-image"
            />
            <button
              className="preview-remove-button"
              onClick={() => handleRemovePreview(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

UploadImg.propTypes = {
  variant: PropTypes.oneOf(["portada", "gallery"]),
  onUpload: PropTypes.func,
};

UploadImg.defaultProps = {
  variant: "portada",
  onUpload: null,
};

export default UploadImg;
