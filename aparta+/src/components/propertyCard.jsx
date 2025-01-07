  import "+/propertyCard.component.scss";
  import PropertyCardImage from "&/PropertyCard.svg";


  const PropertyCard = () => {
    return (
      <div className="property-card">
        <img
          src={PropertyCardImage}
          alt="Property"
          className="property-card__image"
        />
        <div className="property-card__content">
          <h3 className="property-card__title">Zona de Rico</h3>
          <div className="property-card__details">
            <span className="property-card__units">4 Unit</span>
            <span className="property-card__rooms">20 Rooms</span>
          </div>
          <p className="property-card__address">
            Calle Principal #123, Ensanche Naco, Santo Domingo
          </p>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;


