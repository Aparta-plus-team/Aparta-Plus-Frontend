import Header from "*/header";
import Sidebar from "*/generalSidebar";
import DashboardCard from "*/dashboardCard";
import "+/dashboard.scss";
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="dashboard">
      {/* Header debe estar fuera del contenido principal para que sea fijo en la parte superior */}
      <Header />

      {/* Sidebar */}
      <Sidebar selected={location.pathname} />

      {/* Contenido principal */}
      <div className="dashboard__content">
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

        {/* Resto del contenido igual... */}
      </div>
    </div>
  );
};

export default Dashboard;
