import MainView from "*/mainView";
import PropertyCard from "*/propertyCard";
import Button from "*/button";
import React from "react";
import Matrix from '*/Matrix'; // Make sure to import Matrix
import "+/verPropiedades.scss";

const VerPropiedades = () => {
    return (
        <MainView sidebarType="thin">
            <div className="property-page">
                <h1 className="property-title">B4</h1>
                <section className="property-gallery-section">
                    <div className="gallery-container">
                        <div className="image-wrapper">
                            <img className="property-image" src="./src/assets/house.png" alt="house" />
                            <img className="property-image" src="./src/assets/house1.png" alt="house" />
                            <img className="property-image" src="./src/assets/house3.png" alt="house" />
                            <img className="property-image" src="./src/assets/house4.jpg" alt="house" />
                        </div>
                        <div className="action-buttons">
                            <Button text="Eliminar" color="blue" width="150px" />
                            <Button text="Editar" color="green" width="150px" />
                        </div>
                    </div>
                    <div className="property-list">
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>
                </section>
                <section className="property-info-section">
                    <header className="info-header"><h2>Información</h2></header>
                    <div className="info-content">
                        <p><strong>Inquilino:</strong> Aquilenyi Suero De Los Santos</p>
                        <p><strong>Monto:</strong> 30,000</p>
                        <div className="details-container">
                            <div className="details-group">
                                <p><strong>Habitaciones:</strong> 3</p> 
                                <p><strong>Baños:</strong> 4</p> 
                            </div>
                            <div className="details-group">
                                <p><strong>Parqueo:</strong> Si</p> 
                                <p><strong>Amueblado:</strong> No</p> 
                            </div>
                        </div>
                    </div>
                </section>
                <section className="apartments-section">
                    <h2 className="apartments-title">Apartamentos</h2>
                    <Matrix tipo="propiedad" nombreApartamento="B04" nombreInquilino="Joaquin Valdéz Mateo" monto="30,000" />
                    <Matrix tipo="propiedad" nombreApartamento="Z05" nombreInquilino="Juan Santana De La Cruz" monto="39,000" />
                    <Matrix tipo="propiedad" nombreApartamento="H05" nombreInquilino="Aquilenyi Suero De Los Santos" monto="24,000" />  
                </section>
            </div>
        </MainView>

    );
}

export default VerPropiedades;