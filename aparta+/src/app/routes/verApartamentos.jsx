import MainView from "*/mainView";
import ApartamentCard from "*/apartmentCard"; 
import Button from "*/button";
import ContractApartment from "*/contractContainer";
import Matrix from "*/matrix";
import React from "react";
import "+/verApartamentos.scss";

const VerApartamentos = () => {
    return (
        <MainView sidebarType="thin">
            <div className="apartament-page">
                <h1 className="page-title">B4</h1>

                <section className="apartment-details-section">
                    <div className="apartment-overview">
                        <div className="apartment-header">
                            <h2 className="apartment-name">BZ5</h2>
                        </div>
                        <div className="action-buttons">
                            <Button text="Eliminar" color="blue" width="150px"></Button>
                            <Button text="Editar" color="green" width="150px"></Button>
                            <Button text="Desalojar Inquilino" color="red" width="190px"></Button>

                        </div>
                    </div>
                    <div className="apartment-cards">
                        <ApartamentCard></ApartamentCard>
                        <ApartamentCard></ApartamentCard>
                        <ApartamentCard></ApartamentCard>
                    </div>
                </section>

                <section className="apartment-info-section">
                    <header className="info-header"><h2>Información</h2></header>
                    <body className="info-details">
                        <p><strong>Inquilino:</strong> Aquilenyi Suero De Los Santos</p>
                        <p><strong>Monto:</strong> 30,000</p>
                        <div className="apartment-details">
                            <div className="room-details">
                                <p><strong>Habitaciones:</strong> 3</p> 
                                <p><strong>Amueblado:</strong> No</p> 
                            </div>
                            <div className="additional-info">
                                <p><strong>Parqueo:</strong> Si</p> 
                                <p><strong>Baños:</strong> 4</p> 
                            </div>
                        </div>
                    </body>
                </section>

                <section className="document-section">
                    <h2 className="documents-title">Documentos</h2>
                    <ContractApartment></ContractApartment>
                </section>

                <section className="statistics-section">
                    <Matrix tipo="estadisticas" nombreApartamento="Z05" nombreInquilino="Aquilenyi Suero De Los Santos" monto="35,000"></Matrix>
                </section>
            </div>
        </MainView>
    );
}

export default VerApartamentos;
