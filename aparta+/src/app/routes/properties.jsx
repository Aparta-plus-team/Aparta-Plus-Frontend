
import Header from "*/header";
import Sidebar from "*/generalSidebar";
import Searchbar from "*/searchbar";
import PropertyCard from "*/propertyCard";
import "+/properties.scss"; 
import { useLocation } from 'react-router-dom';

const Property = () => {
  const location = useLocation();
  return (
    <div className="property">
      {/* Sidebar */}
      <Sidebar selected={location.pathname} />

      {/* Contenido principal */}
      <div className="property__content">
        {/* Header */}
        <Header />

        {/* Sección de bienvenida y barra de búsqueda */}
        <div className="property__header">
          <h1 className="property__welcome">WELCOME AQUILEN’T!</h1>
          <div className="property__actions">
            <Searchbar />
            <button className="property__add-property">Añadir una propiedad +</button>
          </div>
        </div>

        {/* Lista de propiedades */}
        <div className="property__properties">
          {/* Renderizamos varios PropertyCard */}
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Property;
