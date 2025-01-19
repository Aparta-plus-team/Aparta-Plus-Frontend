// import DashboardCard from "*/dashboardCard";
// import "+/dashboard.scss";
// import ListComponent from "*/ultimaTransaccion";
// import MainView from "*/mainView";
// import ReporteVentas from "*/reporteVentas";
// import DesgloseIngresos from "../../components/desgloseIngresos";

// const Dashboard = () => {
//   return (
//     <MainView sidebarType="full">
//       <div className="dashboard__content m-10 flex flex-col gap-8">
//         {/* Cards de estadísticas */}
//         <div className="dashboard-stats">
//           <DashboardCard type="total" value={10} title="Propiedades total" />
//           <DashboardCard
//             type="rented"
//             value={7}
//             title="Propiedades alquilados"
//           />
//           <DashboardCard type="earnings" value={150} title="Ganancia Mensual" />
//         </div>
//         <div className="flex flex-row justify-between gap-8 max-h-96">
//           <ReporteVentas />
//           <DesgloseIngresos />
//         </div>
//         <div className="flex flex-row justify-center gap-8 max-h-56">
//           <ListComponent
//             type="transactions"
//             items={[
//               {
//                 id: 1,
//                 propertyName: "Casa de Juan",
//                 date: "12 Sep 2024",
//                 amount: 30,
//                 image:
//                   "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
//               },
//               {
//                 id: 2,
//                 propertyName: "Zona De Rico",
//                 date: "10 Sep 2024",
//                 amount: 10,
//                 image:
//                   "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
//               },
//               {
//                 id: 3,
//                 propertyName: "Diddy House",
//                 date: "8 Sep 2024",
//                 amount: 20,
//                 image:
//                   "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
//               },
//             ]}
//           />
//           <ListComponent
//             type="issues"
//             items={[
//               {
//                 id: 1,
//                 propertyName: "721 Meadowview",
//                 userName: "Jacob Jones",
//                 userImage:
//                   "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
//               },
//               {
//                 id: 2,
//                 propertyName: "721 Meadowview",
//                 userName: "Albert Flores",
//                 userImage:
//                   "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
//               },
//               {
//                 id: 3,
//                 propertyName: "721 Meadowview",
//                 userName: "Robert Fox",
//                 userImage:
//                   "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
//               },
//             ]}
//           />
//         </div>

//         {/* Resto del contenido igual... */}
//       </div>
//     </MainView>
//   );
// };

// export default Dashboard;


import { gql, useQuery } from '@apollo/client';
import DashboardCard from "*/dashboardCard";
import "+/dashboard.scss";
import ListComponent from "*/ultimaTransaccion";
import MainView from "*/mainView";
import ReporteVentas from "*/reporteVentas";
import DesgloseIngresos from "../../components/desgloseIngresos";

// Definimos el query como una constante
const DASHBOARD_QUERY = gql`
  query verDashboard {
    dashboardStatistics(userId: "5438d448-5021-7021-9bc2-6dff0e2b46da") {
      gananciaMensual
      propiedadesAlquiladas
      totalPropiedades
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
      desglosePorUbicacion {
        ganancia
        porcentaje
        ubicacion
      }
    }
  }
`;

const Dashboard = () => {
  // Utilizamos el hook useQuery para ejecutar la consulta
  const { loading, error, data } = useQuery(DASHBOARD_QUERY);

  // Manejo de estados de carga y error
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Desestructuramos los datos que necesitamos
  const {
    totalPropiedades,
    propiedadesAlquiladas,
    gananciaMensual,
    transaccionesRecientes,
    morosidades,
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
            type="transactions"
            items={transaccionesRecientes.map((transaccion, index) => ({
              id: index + 1,
              propertyName: transaccion.propiedadNombre,
              date: new Date(transaccion.fecha).toLocaleDateString(),
              amount: transaccion.monto,
              image: "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Mantener imagen por defecto o implementar lógica para imágenes
            }))}
          />
          <ListComponent
            type="issues"
            items={morosidades.map((morosidad, index) => ({
              id: index + 1,
              propertyName: morosidad.propiedadNombre,
              userName: morosidad.inquilino,
              userImage: "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Mantener imagen por defecto o implementar lógica para imágenes
            }))}
          />
        </div>
      </div>
    </MainView>
  );
};

export default Dashboard;