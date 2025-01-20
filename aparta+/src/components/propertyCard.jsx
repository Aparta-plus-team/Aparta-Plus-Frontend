
  import PropTypes from "prop-types"; // Importamos PropTypes
  import "+/propertyCard.component.scss";
  import PropertyCardImage from "&/PropertyCard.svg";
  
  // Recibimos las propiedades a través de props
  const PropertyCard = ({ nombre, portadaurl, ubicacion, estado, propiedadid }) => {
    return (
      <div className="property-card" data-id={propiedadid}>
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
            <span className="property-card__units">{estado ? 'Alquilado' : 'Libre'}</span>
          </div>
          <p className="property-card__address">{ubicacion}</p>
        </div>
      </div>
    );
  };
  
  // Validamos las propiedades
  PropertyCard.propTypes = {
    nombre: PropTypes.string.isRequired, // nombre debe ser una cadena de texto y es obligatorio
    portadaurl: PropTypes.string, // portadaurl debe ser una cadena de texto, puede ser opcional
    ubicacion: PropTypes.string.isRequired, // ubicacion debe ser una cadena de texto y es obligatorio
    estado: PropTypes.bool.isRequired, // estado debe ser un booleano y es obligatorio
    propiedadid: PropTypes.string.isRequired, // propiedadid debe ser una cadena de texto y es obligatorio
  };
  
  export default PropertyCard;
  