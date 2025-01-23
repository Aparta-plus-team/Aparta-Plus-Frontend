

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "+/Matrix.component.scss";

const Matrix = ({
  tipo,
  nombreApartamento,
  nombreInquilino,
  monto,
  inmuebleid,
}) => {
  const titulo =
    tipo === "propiedad"
      ? nombreApartamento || "No especificado"
      : "Estadísticas";
  const inquilino = tipo === "propiedad" ? nombreInquilino : "No especificado";
  const propMonto = tipo === "propiedad" ? monto : "No especificado";

  // Estado para manejar la visibilidad de los elementos
  const [isVisible, setIsVisible] = useState(false);

  // Función que maneja el cambio de selección en el combo box
  const handleSelectChange = (e) => {
    setIsVisible(e.target.value !== ""); // Mostrar contenido si se selecciona un valor válido
  };

  // Función para evitar que el clic en el selector de año propague la acción
  const handleSelectClick = (e) => {
    e.stopPropagation(); // Evita que el clic active el enlace
  };

  return (
    <section className={`matrix-container ${isVisible ? "expanded" : ""}`}>
      <header className="matrix-header">
        {/* Envolver el título con un Link para redirigir al apartamento */}
        <Link to={`/verapartamentos/${inmuebleid}`} className="matrix-title-link">
          <h2 className="matrix-title">{titulo}</h2>
        </Link>

        {/* Prevent default behavior when clicking on the selector */}
        <div className="matrix-select">
          <select
            className="select-box"
            name="Años"
            onChange={handleSelectChange}
            onClick={handleSelectClick} // Detener la propagación del clic
          >
            <option value="">Año</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </header>

      {tipo === "propiedad" && (
        <div className="matrix-apartamento">
          <p>
            <strong>Inquilino:</strong> {inquilino}
          </p>
          <p>
            <strong>Monto:</strong> {propMonto}
          </p>
        </div>
      )}

      {isVisible && (
        <article className="matrix-content">
          <ul className="matrix-months">
            <li className="month">
              Enero
              <br />
              <div className="matrix-state-pagado">
                <p>Pagado</p>
              </div>
            </li>
            <li className="month">
              Febrero
              <br />
              <div className="matrix-state-desocupado">
                <p>Desocupado</p>
              </div>
            </li>
            <li className="month">
              Marzo
              <br />
              <div className="matrix-state-adelantado">
                <p>Adelantado</p>
              </div>
            </li>
            <li className="month">
              Abril
              <br />
              <div className="matrix-state-pagado">
                <p>Pagado</p>
              </div>
            </li>
            <li className="month">
              Mayo
              <br />
              <div className="matrix-state-desocupado">
                <p>Desocupado</p>
              </div>
            </li>
            <li className="month">
              Junio
              <br />
              <div className="matrix-state-adelantado">
                <p>Adelantado</p>
              </div>
            </li>
            <li className="month">
              Julio
              <br />
              <div className="matrix-state-pagado">
                <p>Pagado</p>
              </div>
            </li>
            <li className="month">
              Agosto
              <br />
              <div className="matrix-state-desocupado">
                <p>Desocupado</p>
              </div>
            </li>
            <li className="month">
              Septiembre
              <br />
              <div className="matrix-state-adelantado">
                <p>Adelantado</p>
              </div>
            </li>
            <li className="month">
              Octubre
              <br />
              <div className="matrix-state-pagado">
                <p>Pagado</p>
              </div>
            </li>
            <li className="month">
              Noviembre
              <br />
              <div className="matrix-state-desocupado">
                <p>Desocupado</p>
              </div>
            </li>
            <li className="month">
              Diciembre
              <br />
              <div className="matrix-state-adelantado">
                <p>Adelantado</p>
              </div>
            </li>
          </ul>
        </article>
      )}
    </section>
  );
};

export default Matrix;
