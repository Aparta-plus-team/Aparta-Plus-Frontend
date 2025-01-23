

import PropTypes from "prop-types"; // Importamos PropTypes
import "+/propertyCard.component.scss";
import PropertyCardImage from "&/PropertyCard.svg";
import { useNavigate } from "react-router-dom"; // Importamos el hook para la navegación

// Recibimos las propiedades a través de props
const PropertyCard = ({
  nombre,
  portadaurl,
  ubicacion,
  propiedadid,
  inmuebles,
  tipo,
  id,
}) => {
  const navigate = useNavigate(); // Inicializamos el hook para navegación

  const handleClick = () => {
    // Redirigir según el tipo
    const path =
      tipo === "apartamento"
        ? `/verapartamentos/${id}`
        : `/verpropiedades/${id}`;
    navigate(path);
  };

  return (
    <div
      className="property-card"
      data-id={propiedadid}
      onClick={handleClick} // Llamamos a la función de navegación al hacer clic
      style={{ cursor: "pointer" }} // Indicamos que es clickeable
    >
      {/* Usamos la imagen de portada si está disponible */}
      <img
        src={portadaurl || PropertyCardImage} // Si no hay imagen, usamos la imagen por defecto
        alt="Property"
        className="property-card__image"
      />
      <div className="property-card__content">
        <h3 className="property-card__title">{nombre}</h3>
        <div className="property-card__details">
          {/* Convertir el estado a cadena si es un booleano */}
          <span className="property-card__units">
            Apartamentos: {inmuebles.length}
          </span>
        </div>
        <p className="property-card__address">{ubicacion}</p>
      </div>
    </div>
  );
};

// Validamos las propiedades
PropertyCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  portadaurl: PropTypes.string,
  ubicacion: PropTypes.string.isRequired,
  propiedadid: PropTypes.string.isRequired,
  inmuebles: PropTypes.array.isRequired,
  tipo: PropTypes.oneOf(["propiedad", "apartamento"]).isRequired, // Validamos que sea "propiedad" o "apartamento"
  id: PropTypes.string.isRequired, // Validamos que el ID sea requerido
};

export default PropertyCard;
