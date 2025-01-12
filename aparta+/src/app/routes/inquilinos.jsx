// InquilinosPage.jsx
import Header from "*/header";
import Sidebar from "*/generalSidebar";
import Searchbar from "*/searchbar";
import TablaInquilinos from "*/tablaInquilinos";
import "+/inquilinos.scss";
import { useLocation } from 'react-router-dom';

const InquilinosPage = () => {
  const location = useLocation();

  const inquilinos = [
    {
      nombre: "Keven",
      apellido: "Sheih",
      correo: "keven.g@gmail.com",
      apartamento: "Apartamento Taiwané",
      estado: "Pagado"
    },
    {
      nombre: "I Chia",
      apellido: "Sheih Juan",
      correo: "ichia.s@gmail.com",
      apartamento: "Apartamento Chino",
      estado: "Atrasado"
    }
  ];

  return (
    <div className="layout">
      <Sidebar selected={location.pathname} />
      
      <main className="layout__main">
        <Header />
        
        <div className="layout__content">
          <div className="inquilinos-container">
            <div className="inquilinos-header">
              <h1>Administrar Inquilinos</h1>
              <div className="inquilinos-actions">
                <Searchbar />
                <button className="add-button">Añadir un inquilino +</button>
              </div>
            </div>

            <div className="table-container">
              <div className="table-header">
                <div className="header-cell">Nombre</div>
                <div className="header-cell">Correo electrónico</div>
                <div className="header-cell">Apartamentos asociados</div>
                <div className="header-cell">Estado</div>
                <div className="header-cell">Acciones</div>
              </div>
              <TablaInquilinos inquilinos={inquilinos} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InquilinosPage;