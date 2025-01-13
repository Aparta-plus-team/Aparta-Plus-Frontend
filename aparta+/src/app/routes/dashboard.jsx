import DashboardCard from "*/dashboardCard";
import "+/dashboard.scss";
import ListComponent from "*/ultimaTransaccion";
import MainView from "*/mainView";
import ReporteVentas from "*/reporteVentas";
import DesgloseIngresos from "../../components/desgloseIngresos";

const Dashboard = () => {
  return (
    <MainView sidebarType="full">
      <div className="dashboard__content m-10 flex flex-col gap-8">
        {/* Cards de estadísticas */}
        <div className="dashboard-stats">
          <DashboardCard type="total" value={10} title="Propiedades total" />
          <DashboardCard
            type="rented"
            value={7}
            title="Propiedades alquilados"
          />
          <DashboardCard type="earnings" value={150} title="Ganancia Mensual" />
        </div>
        <div className="flex flex-row justify-between gap-8 max-h-96">
          <ReporteVentas />
          <DesgloseIngresos />
        </div>
        <div className="flex flex-row justify-center gap-8 max-h-56">
          <ListComponent
            type="transactions"
            items={[
              {
                id: 1,
                propertyName: "Casa de Juan",
                date: "12 Sep 2024",
                amount: 30,
                image:
                  "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
              },
              {
                id: 2,
                propertyName: "Zona De Rico",
                date: "10 Sep 2024",
                amount: 10,
                image:
                  "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
              },
              {
                id: 3,
                propertyName: "Diddy House",
                date: "8 Sep 2024",
                amount: 20,
                image:
                  "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
              },
            ]}
          />
          <ListComponent
            type="issues"
            items={[
              {
                id: 1,
                propertyName: "721 Meadowview",
                userName: "Jacob Jones",
                userImage:
                  "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
              },
              {
                id: 2,
                propertyName: "721 Meadowview",
                userName: "Albert Flores",
                userImage:
                  "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
              },
              {
                id: 3,
                propertyName: "721 Meadowview",
                userName: "Robert Fox",
                userImage:
                  "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
              },
            ]}
          />
        </div>

        {/* Resto del contenido igual... */}
      </div>
    </MainView>
  );
};

export default Dashboard;
