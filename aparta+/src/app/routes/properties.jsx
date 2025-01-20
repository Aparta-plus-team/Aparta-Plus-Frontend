import Searchbar from "*/searchbar";
import PropertyCard from "*/propertyCard";
import "+/properties.scss";
import MainView from "*/mainView";

const Property = () => {
  return (
    <MainView sidebarType="full">
      <div className="property__content">
        {/* Sección de bienvenida y barra de búsqueda */}
        <div className="property__header">
          <h1 className="property__welcome">WELCOME AQUILEN’T!</h1>
          <div className="property__actions">
            <Searchbar placeholder="Buscar propiedad" />
            <a href="/crearpropiedad">
              <button className="property__add-property">
                Añadir una propiedad +
              </button>
            </a>
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
    </MainView>
  );
};

export default Property;
