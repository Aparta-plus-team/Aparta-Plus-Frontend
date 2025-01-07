import React, { useState } from "react";
import "+/uploadDocs.component.scss";

function UploadDocuments() {
  const [fileNames, setFileNames] = useState([]); // Estado para los nombres de los archivos

  // Maneja el evento cuando se arrastra un archivo al área
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files); // Obtiene los archivos arrastrados
    if (files.length > 0) {
      setFileNames((prevFileNames) => [
        ...prevFileNames,
        ...files.map((file) => file.name),
      ]); // Agrega los nuevos archivos al estado
    }
  };

  // Maneja el evento cuando se seleccionan archivos con el botón
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Obtiene los archivos seleccionados
    if (files.length > 0) {
      setFileNames((prevFileNames) => [
        ...prevFileNames,
        ...files.map((file) => file.name),
      ]); // Agrega los nuevos archivos al estado
    }
  };

  // Evita el comportamiento predeterminado del navegador al arrastrar
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Elimina un archivo de la lista
  const handleRemoveFile = (fileName) => {
    setFileNames((prevFileNames) =>
      prevFileNames.filter((name) => name !== fileName)
    );
  };

  return (
    <div
      className="upload-container"
      onDrop={handleDrop} // Detecta el archivo cuando se suelta
      onDragOver={handleDragOver} // Permite el evento de arrastrar
    >
      <div className="upload-box">
        <div className="upload-icon">
          <svg
            width="50"
            height="49"
            viewBox="0 0 50 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.2559 20.0972C44.8887 19.1038 43.209 18.3746 41.4355 17.9813C41.1444 17.9171 40.8778 17.773 40.667 17.5659C40.4562 17.3588 40.3099 17.0973 40.2451 16.8118C39.4834 13.4861 37.8438 10.6341 35.4336 8.47314C32.6318 5.95711 28.9268 4.57324 25 4.57324C21.5479 4.57324 18.3594 5.63363 15.7842 7.64053C14.0389 9.00282 12.634 10.7377 11.6768 12.7128C11.573 12.9289 11.419 13.1182 11.2273 13.2656C11.0355 13.413 10.8112 13.5144 10.5723 13.5617C7.95996 14.0785 5.60156 15.1762 3.80078 16.7314C1.31445 18.8847 0 21.7472 0 25.0154C0 28.3191 1.41504 31.3318 3.9834 33.51C6.43652 35.5858 9.73926 36.7295 13.2812 36.7295H23.4375V22.0515L19.8545 25.5629C19.7049 25.7094 19.5265 25.8247 19.3301 25.9017C19.1337 25.9787 18.9234 26.0159 18.7119 26.0108C18.5004 26.0058 18.2922 25.9588 18.0998 25.8726C17.9075 25.7864 17.735 25.6628 17.5928 25.5093C17.0264 24.8996 17.0811 23.9493 17.6758 23.3665L23.8955 17.2721C24.1885 16.9851 24.5858 16.824 25 16.824C25.4142 16.824 25.8115 16.9851 26.1045 17.2721L32.3242 23.3646C32.9375 23.9665 32.9727 24.9532 32.3623 25.5571C32.2175 25.7004 32.0452 25.8143 31.8554 25.8922C31.6656 25.9701 31.4619 26.0105 31.2561 26.011C31.0503 26.0115 30.8464 25.9722 30.6562 25.8953C30.4659 25.8184 30.293 25.7054 30.1475 25.5629L26.5625 22.0515V36.7295H38.6719C41.7324 36.7295 44.5225 35.8873 46.5283 34.3589C48.7998 32.6267 50 30.148 50 27.1975C50 24.3321 48.7051 21.8754 46.2559 20.0972ZM23.4375 42.8947C23.4375 43.3008 23.6021 43.6903 23.8951 43.9774C24.1882 44.2646 24.5856 44.4259 25 44.4259C25.4144 44.4259 25.8118 44.2646 26.1049 43.9774C26.3979 43.6903 26.5625 43.3008 26.5625 42.8947V36.7295H23.4375V42.8947Z"
              fill="#094152"
            />
          </svg>
        </div>
        <p className="upload-text">Arrastra tus archivos aquí</p>
        <label htmlFor="fileInput" className="upload-button">
          Buscar
        </label>
        <input
          type="file"
          id="fileInput"
          multiple // Permite seleccionar múltiples archivos
          style={{ display: "none" }}
          onChange={handleFileChange} // Detecta archivos seleccionados
        />
        {fileNames.length > 0 && (
          <div className="file-list">
            {fileNames.map((fileName, index) => (
              <div key={index} className="file-item">
                <span>{fileName}</span>
                <button
                  className="remove-file"
                  onClick={() => handleRemoveFile(fileName)} // Elimina un archivo
                >
                  <svg width="20" height="20" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256.28 48.1284C141.59 48.1284 48.2803 141.438 48.2803 256.128C48.2803 370.818 141.59 464.128 256.28 464.128C370.97 464.128 464.28 370.818 464.28 256.128C464.28 141.438 370.97 48.1284 256.28 48.1284ZM342.91 320.128L320.28 342.758L256.28 278.758L192.28 342.758L169.65 320.128L233.65 256.128L169.65 192.128L192.28 169.498L256.28 233.498L320.28 169.498L342.91 192.128L278.91 256.128L342.91 320.128Z" fill="black"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadDocuments;
