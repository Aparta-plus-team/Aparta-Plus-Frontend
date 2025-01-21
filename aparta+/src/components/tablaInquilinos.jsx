import "+/tablaInquilinos.component.scss";
import PropTypes from "prop-types";

const TablaInquilinos = ({ inquilinos, onPagoConfirmado }) => {
  // Función para obtener la clase CSS basada en el estado
  const getStatusClass = (status) => {
    return status ? "status-paid" : "status-late";
  };

  // Función para manejar el click en el botón de pago
  const handlePagoClick = (inquilino) => {
    const confirmar = window.confirm(`¿Estás seguro que deseas registrar el pago para ${inquilino.nombre}?`);
    
    if (confirmar) {
      // Si existe la función onPagoConfirmado en las props, la llamamos con el inquilino
      if (onPagoConfirmado) {
        onPagoConfirmado(inquilino);
      }
    }
  };

  return (
    <div className="inquilino-list">
      {inquilinos.map((inquilino, index) => (
        <div key={index} className="inquilino-row">
          <div className="inquilino-info name">{inquilino.nombre}</div>
          <div className="inquilino-info email">{inquilino.correo}</div>
          <div className="inquilino-info phone">{inquilino.telefono}</div>
          <div
            className={`inquilino-info status ${getStatusClass(
              inquilino.estado
            )}`}
          >
            <span className="status-badge">
              {inquilino.estado ? "Pagado" : "Atrasado"}
            </span>
          </div>
          <div className="inquilino-info actions">
            <a href={`/editarinquilino/${inquilino.id}`}>
              <button className="edit-button mx-2">
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
            <button 
              className="edit-button mx-2"
              onClick={() => handlePagoClick(inquilino)}
            >
              <span className="material-symbols-outlined">attach_money</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

TablaInquilinos.propTypes = {
  inquilinos: PropTypes.array,
  onPagoConfirmado: PropTypes.func,
};

export default TablaInquilinos;