import MainView from "*/mainView";
import ApartamentCard from "*/apartmentCard"; 
import Button from "*/button";
import React from "react";
import "+/verApartamentos.scss";

const VerApartamentos = () => {
    return (
        <MainView sidebarType="thin">
            <div className="page-container">

                <h1 className="view-title">B4</h1>

                <section className="first-content">
                    <div className="view-imagenes">
                        <img className="imagenes" src="./src/assets/house.png" alt="house" />
                        <img className="imagenes" src="./src/assets/house1.png" alt="house" />
                        <img className="imagenes" src="./src/assets/house3.png" alt="house" />
                        <img className="imagenes" src="./src/assets/house4.jpg" alt="house" />
                        <div className="buttons">
                            <Button text="Eliminar" color="blue" width="150px"></Button>
                            <Button text="Editar" color="green" width="150px"></Button>
                        </div>
                    </div>
                    <div className="view-apartamentos">
                        <ApartamentCard></ApartamentCard>
                        <ApartamentCard></ApartamentCard>
                    </div>
                </section>

                <section className="second-content">
                    <header className="info-title"><h2>Información</h2></header>
                    <body>
                        <p><strong>Inquilino:</strong> Aquilenyi Suero De Los Santos</p>
                        <p><strong>Monto:</strong> 30,000</p>
                        <div>
                            
                        </div>

                    </body>
                </section>
            </div>
        </MainView>
    );
}

export default VerApartamentos;