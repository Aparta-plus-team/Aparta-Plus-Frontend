import React, { useState } from 'react';
import '+/uploadImg.component.scss'; // Archivo SCSS para estilos

function UploadImg() {
    const [fileName, setFileNames] = useState([]); // Lista de nombres de archivos
    const [previews, setPreviews] = useState([]); // Previsualizaciones de imágenes

    // Maneja la selección de archivos desde el botón
    const handleFileInput = (e) => {
        const files = Array.from(e.target.files).filter((file) =>
            file.type.startsWith("image/") // Acepta solo imágenes
        );

        if (files.length > 0) {
            setFileNames((prevFileNames) => [
                ...prevFileNames,
                ...files.map((file) => file.name)
            ]);

            setPreviews((prevPreviews) => [
                ...prevPreviews,
                ...files.map((file) => URL.createObjectURL(file))
            ]);
        } else {
            alert("Por favor, selecciona solo fotos (formatos de imagen).");
        }
    };

    // Maneja el evento de arrastrar y soltar archivos
    const handleDrop = (event) => {
        event.preventDefault();

        const files = Array.from(event.dataTransfer.files).filter((file) =>
            file.type.startsWith("image/")
        );

        if (files.length > 0) {
            setFileNames((prevFileNames) => [
                ...prevFileNames,
                ...files.map((file) => file.name)
            ]);

            setPreviews((prevPreviews) => [
                ...prevPreviews,
                ...files.map((file) => URL.createObjectURL(file))
            ]);
        } else {
            alert("Por favor, arrastra solo fotos (formatos de imagen).");
        }
    };

    // Evita el comportamiento predeterminado del navegador al arrastrar
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Elimina un archivo de la lista
    const handleRemoveFile = (index) => {
        setFileNames((prevFileNames) =>
            prevFileNames.filter((_, i) => i !== index)
        );

        setPreviews((prevPreviews) =>
            prevPreviews.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="upload-container">
            <div className="upload-box" 
                onDrop={handleDrop} 
                onDragOver={handleDragOver}
            >
                <div className="upload-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.75 42L31.875 24L40.875 33M12.75 42H35.25C38.9779 42 42 38.9779 42 35.25V24M12.75 42C9.02208 42 6 38.9779 6 35.25V12.75C6 9.02208 9.02208 6 12.75 6H27.375M33 10.5798L37.6018 6M37.6018 6L42 10.3728M37.6018 6V17.25M19.5 16.125C19.5 17.989 17.989 19.5 16.125 19.5C14.261 19.5 12.75 17.989 12.75 16.125C12.75 14.261 14.261 12.75 16.125 12.75C17.989 12.75 19.5 14.261 19.5 16.125Z" stroke="#094152" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                            
                </div>
                <p className="upload-text">Arrastra tu imagen aquí</p>
                <button className="upload-button" onClick={() => document.getElementById('file-input').click()}>
                    Buscar
                </button>
                <input 
                    id="file-input"
                    type="file" 
                    multiple 
                    accept="image/*" 
                    onChange={handleFileInput} 
                    style={{ display: 'none' }}
                />
            </div>

            {/* Previsualizaciones de las imágenes cargadas */}
            <div className="upload-previews">
                {previews.map((preview, index) => (
                    <div key={index} className="preview-container">
                        <img
                            src={preview}
                            alt={`Preview ${index}`}
                            className="preview-image"
                        />
                        <button
                            className="preview-remove-button"
                            onClick={() => handleRemoveFile(index)}
                        >
                            <svg width="20" height="20" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M256.884 48.9883C142.194 48.9883 48.884 142.298 48.884 256.988C48.884 371.678 142.194 464.988 256.884 464.988C371.574 464.988 464.884 371.678 464.884 256.988C464.884 142.298 371.574 48.9883 256.884 48.9883ZM332.194 309.678C333.742 311.149 334.98 312.915 335.835 314.872C336.69 316.829 337.145 318.938 337.172 321.073C337.2 323.209 336.799 325.328 335.995 327.306C335.19 329.284 333.998 331.082 332.487 332.592C330.977 334.102 329.18 335.294 327.202 336.099C325.224 336.904 323.104 337.304 320.969 337.277C318.833 337.249 316.725 336.795 314.768 335.94C312.811 335.085 311.045 333.847 309.574 332.298L256.884 279.618L204.194 332.298C201.169 335.172 197.141 336.751 192.969 336.697C188.797 336.644 184.81 334.963 181.86 332.012C178.91 329.062 177.228 325.076 177.175 320.903C177.122 316.731 178.7 312.703 181.574 309.678L234.254 256.988L181.574 204.298C178.7 201.273 177.122 197.245 177.175 193.073C177.228 188.901 178.91 184.915 181.86 181.964C184.81 179.014 188.797 177.333 192.969 177.279C197.141 177.226 201.169 178.804 204.194 181.678L256.884 234.358L309.574 181.678C312.599 178.804 316.627 177.226 320.799 177.279C324.971 177.333 328.958 179.014 331.908 181.964C334.859 184.915 336.54 188.901 336.593 193.073C336.646 197.245 335.068 201.273 332.194 204.298L279.514 256.988L332.194 309.678Z" fill="#C6BEC2"/>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UploadImg;
