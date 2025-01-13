import Searchbar from "*/searchbar";
import TablaInquilinos from "*/tablaInquilinos";
import "+/inquilinos.scss";
import MainView from "*/mainView";

const InquilinosPage = () => {

  const inquilinos = [
    {
      nombre: "Keven",
      apellido: "Sheih",
      correo: "keven.g@gmail.com",
      apartamento: "Apartamento Taiwané",
      estado: "Pagado",
    },
    {
      nombre: "I Chia",
      apellido: "Sheih Juan",
      correo: "ichia.s@gmail.com",
      apartamento: "Apartamento Chino",
      estado: "Atrasado",
    },
  ];

  return (
    <MainView sidebarType="full">
      <main className="layout__main">
        <div className="layout__content">
          <div className="inquilinos-container">
            <div className="inquilinos-header">
              <h1>Administrar Inquilinos</h1>
              <div className="inquilinos-actions">
                <Searchbar placeholder = "Buscar inquilino" />
                <a href="/crearinquilino">
                  <button className="add-button">Añadir un inquilino +</button>
                </a>
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
    </MainView>
  );
};

export default InquilinosPage;
