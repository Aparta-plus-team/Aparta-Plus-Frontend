import { gql, useQuery } from "@apollo/client";
import DashboardCard from "*/dashboardCard";
import "+/dashboard.scss";
import ListComponent from "*/ultimaTransaccion";
import MainView from "*/mainView";
import ReporteVentas from "*/reporteVentas";
import DesgloseIngresos from "*/desgloseIngresos";

// Definimos el query como una constante
const DASHBOARD_QUERY = gql`
  query verDashboard ($userId: UUID!) {
    dashboardStatistics(userId: $userId) {
    gananciaMensual
    propiedadesAlquiladas
    totalPropiedades
    desglosePorUbicacion {
      ganancia
      porcentaje
      ubicacion
    }
    gananciasMensuales {
      ganancia
      mes
    }
    morosidades {
      detalle
      inquilino
      propiedadNombre
      servicio
    }
    transaccionesRecientes {
      fecha
      monto
      propiedadNombre
    }
    }
  }
`;

const Dashboard = () => {
  // Utilizamos el hook useQuery para ejecutar la consulta
  const { loading, error, data } = useQuery(DASHBOARD_QUERY, {
    variables: { userId: localStorage.getItem("userId") },
  });

  // Manejo de estados de carga y error
  if (loading) return <div></div>;
  if (error) return <div>Error: {error.message}</div>;

  // Desestructuramos los datos que necesitamos
  const {
    totalPropiedades,
    propiedadesAlquiladas,
    gananciaMensual,
  } = data.dashboardStatistics;

  return (
    <MainView sidebarType="full">
      <div className="dashboard__content m-10 flex flex-col gap-8">
        {/* Cards de estadísticas actualizados con datos dinámicos */}
        <div className="dashboard-stats">
          <DashboardCard
            type="total"
            value={totalPropiedades}
            title="Propiedades total"
          />
          <DashboardCard
            type="rented"
            value={propiedadesAlquiladas}
            title="Propiedades alquilados"
          />
          <DashboardCard
            type="earnings"
            value={gananciaMensual}
            title="Ganancia Mensual"
          />
        </div>

        <div className="flex flex-row justify-between gap-8 max-h-96">
          <ReporteVentas />
          <DesgloseIngresos />
        </div>

        <div className="flex flex-row justify-center gap-8 max-h-56">
          <ListComponent
            showMore={true}
            type="transactions"
          />
          <ListComponent
            showMore={true}
            type="issues"
          />
        </div>
      </div>
    </MainView>
  );
};

export default Dashboard;
