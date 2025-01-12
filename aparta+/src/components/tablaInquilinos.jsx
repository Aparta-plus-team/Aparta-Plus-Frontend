import "+/tablaInquilinos.component.scss";
import PropTypes from "prop-types";

const TablaInquilinos = ({ inquilinos = [] }) => {
  // Hacemos la prop opcional con valor por defecto
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "pagado":
        return "status-paid";
      case "atrasado":
        return "status-late";
      case "no pagado":
      default:
        return "status-unpaid";
    }
  };

  return (
    <div className="inquilino-list">
      {" "}
      {/* Cambiado de inquilino-list a inquilino-list */}
      {inquilinos.map((inquilino, index) => (
        <div key={index} className="inquilino-row">
          {" "}
          {/* Cambiado de inquilino-row a inquilino-row */}
          <div className="inquilino-info name">
            {" "}
            {/* Cambiado de inquilino-info a inquilino-info */}
            {inquilino.nombre} {inquilino.apellido}
          </div>
          <div className="inquilino-info email">{inquilino.correo}</div>
          <div className="inquilino-info apartment">
            {inquilino.apartamento}
          </div>
          <div
            className={`inquilino-info status ${getStatusClass(
              inquilino.estado || "No pagado"
            )}`}
          >
            <span className="status-badge">
              {inquilino.estado || "No pagado"}
            </span>
          </div>
          <div className="inquilino-info actions">
            <a href={`/editarinquilino/${inquilino.id}`}>
              <button className="edit-button">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

TablaInquilinos.propTypes = {
  inquilinos: PropTypes.array,
};

TablaInquilinos.defaultProps = {
  inquilinos: [],
};

export default TablaInquilinos;
