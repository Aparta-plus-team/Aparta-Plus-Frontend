import MainView from "*/mainView";
import PropertyCard from "*/propertyCard";
import Button from "*/button";
import Matrix from "*/Matrix"; 
import "+/verPropiedades.scss";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


const GET_PROPIEDADES = gql`
  query verPropiedadCarta {
    propiedads {
      items {
        nombre
        ubicacion
        propiedadid
        inmuebles {
          numbanos
          numhabitaciones
          inmuebleid
          tieneparqueo
        }
      }
    }
  }
`;

const VerPropiedades = () => {
  const { data } = useQuery(GET_PROPIEDADES);
  const [search] = useState("");

  const propiedades = data?.propiedads?.items || [];

  // Filtrar propiedades según la búsqueda
  const filteredProperties = propiedades.filter(
    (prop) => prop.nombre?.toLowerCase().includes(search.toLowerCase()) // Filtra por nombre de la propiedad
  );



  return (
    <MainView sidebarType="thin">
      <div className="property-page">
        <h1 className="property-title">B4</h1>
        <section className="property-gallery-section">
          <div className="gallery-container">
            <div className="image-wrapper">
              <img
                className="property-image"
                src="./src/assets/house.png"
                alt="house"
              />
              <img
                className="property-image"
                src="./src/assets/house1.png"
                alt="house"
              />
              <img
                className="property-image"
                src="./src/assets/house3.png"
                alt="house"
              />
              <img
                className="property-image"
                src="./src/assets/house4.jpg"
                alt="house"
              />
            </div>
            <div className="action-buttons">
              <Button text="Eliminar" color="blue" width="150px" />
              <Button text="Editar" color="green" width="150px" />
            </div>
          </div>
          <div className="property-list " style={{scrollbarWidth: "thin"}}>
            {filteredProperties.map((propiedad) => (
              <PropertyCard
                nombre={propiedad.nombre}
                key={propiedad.propiedadid}
                {...propiedad}
              />
            ))}
          </div>
        </section>
        <section className="property-info-section">
          <header className="info-header">
            <h2>Información</h2>
          </header>
          <div className="info-content">
            <p>
              <strong>Ubicación:</strong> Calle 15, #12, Residencial Los Mangos,
              Las Terrenas
            </p>
            <p>
              <strong>Unidades:</strong> 3
            </p>
          </div>
        </section>
        <section className="apartments-section">
          <h2 className="apartments-title">Apartamentos</h2>
          <Matrix
            tipo="propiedad"
            nombreApartamento="B04"
            nombreInquilino="Joaquin Valdéz Mateo"
            monto="30,000"
          />
          <Matrix
            tipo="propiedad"
            nombreApartamento="Z05"
            nombreInquilino="Juan Santana De La Cruz"
            monto="39,000"
          />
          <Matrix
            tipo="propiedad"
            nombreApartamento="H05"
            nombreInquilino="Aquilenyi Suero De Los Santos"
            monto="24,000"
          />
        </section>
      </div>
    </MainView>
  );
};

export default VerPropiedades;
