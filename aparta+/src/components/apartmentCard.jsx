import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "+/apartmentCard.component.scss";

const CardApart = ({ idApartamento, codigo, inquilino, monto }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/verapartamentos/${idApartamento}`);
  };

  return (
    <div className="container-apartment-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="apartment-card-name">
        <h1>{codigo}</h1>
      </div>
      <div className="apartment-card-info">
        <p>
          <strong className="DTMF">Inquilino:</strong> {inquilino}
        </p>
        <p>
          <strong className="DTMF">Monto:</strong> ${monto}
        </p>
      </div>
    </div>
  );
};

// Validación de propiedades
CardApart.propTypes = {
  idApartamento: PropTypes.string.isRequired, // ID del apartamento, obligatorio
  codigo: PropTypes.string.isRequired,       // Código del apartamento, obligatorio
  inquilino: PropTypes.string.isRequired,    // Nombre del inquilino, obligatorio
  monto: PropTypes.string.isRequired,        // Monto del alquiler, obligatorio
};

export default CardApart;
