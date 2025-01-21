
  import PropTypes from "prop-types"; // Importamos PropTypes
  import "+/propertyCard.component.scss";
  import PropertyCardImage from "&/PropertyCard.svg";
  
  // Recibimos las propiedades a través de props
  const PropertyCard = ({ nombre, portadaurl, ubicacion, propiedadid, inmuebles }) => {
    return (
      <div className="property-card" data-id={propiedadid}>
        {/* Usamos la imagen de portada si está disponible */}
        <img
          src={portadaurl || PropertyCardImage} // Si no hay imagen, usamos la imagen por defecto
          alt="Property"
          className="property-card__image"
        />
        <div className="property-card__content">
          <h3 className="property-card__title">{propiedadid}</h3>
          <div className="property-card__details">
            {/* Convertir el estado a cadena si es un booleano */}
            <span className="property-card__units">Apartamentos: {inmuebles.length}</span>
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
  };
  
  export default PropertyCard;
  