import PropTypes from "prop-types";
import "+/ultimaTransaccion.component.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

// Definimos el query como una constante
const DASHBOARD_QUERY = gql`
  query verDashboard($userId: UUID!) {
    dashboardStatistics(userId: $userId) {
      gananciaMensual
      propiedadesAlquiladas
      totalPropiedades
      transaccionesRecientes {
        fecha
        monto
        propiedadNombre
      }
    }
    morosidadsInquilino(userId: $userId) {
      inquilinoNombre
      propiedadNombre
    }
  }
`;

const ListComponent = ({ type, showMore }) => {
  const iuserId = localStorage.getItem("userId");

  const { data } = useQuery(DASHBOARD_QUERY, {
    variables: { userId: iuserId },
  });

  const transaccionesRecientes =
    data?.dashboardStatistics.transaccionesRecientes;
  const morosidades = data?.morosidadsInquilino;
  console.log(morosidades);
  console.log(transaccionesRecientes);

  let navigate = useNavigate();

  useEffect(() => {
    console.log(morosidades);
  }, [morosidades]);

  const renderHeader = () => {
    return type === "transactions" ? "Última Transacción" : "Morosidad";
  };

  const renderItems = () => {
    if (type === "transactions") {
      return transaccionesRecientes
        .map((transaccion, index) => ({
          id: index + 1,
          propertyName: transaccion.propiedadNombre,
          date: new Date(transaccion.fecha).toLocaleDateString(),
          amount: transaccion.monto,
          image:
            "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Mantener imagen por defecto o implementar lógica para imágenes
        }))
        .map((item) => (
          <NavLink to={`/vivienda/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="transaction-item cursor-pointer hover:bg-gray-100 rounded-3xl my-1"
              onClick={() => console.log("Transaction clicked")}
            >
              <div className="transaction-info">
                <div className="property-img">
                  <img src={item.image} alt={item.propertyName} />
                </div>
                <div className="property-details">
                  <h3>{item.propertyName}</h3>
                  <span className="date">{item.date}</span>
                </div>
              </div>
              <div className="amount">${item.amount}K</div>
            </div>
          </NavLink>
        ));
    } else if (type === "issues") {
      return morosidades
        .map((morosidad, index) => ({
          id: index + 1,
          propertyName: morosidad.propiedadNombre,
          userName: morosidad.inquilinoNombre,
          userImage:
            "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Mantener imagen por defecto o implementar lógica para imágenes
        }))
        .map((item) => (
          <NavLink to={`/vivienda/${item.id}`} key={item.id}>
            <div
              key={item.id}
              className="issue-item cursor-pointer hover:bg-gray-100 rounded-3xl my-1"
            >
              <div className="issue-info">
                <div className="issue-status" />
                <div className="issue-details">
                  <div className="property-info">
                    <h3>{item.propertyName}</h3>
                  </div>
                </div>
              </div>
              <div className="user-info">
                <img
                  src={item.userImage}
                  alt={item.userName}
                  className="user-avatar"
                />
                <span className="user-name">{item.userName}</span>
              </div>
            </div>
          </NavLink>
        ));
    }
  };

  return (
    <div className="w-full">
      <div className={`list-component ${type} h-full overflow-hidden`}>
        <div className="list-header">
          <h2>{renderHeader()}</h2>
          {showMore && (
            <button
              className="view-all"
              onClick={() => {
                if (type == "transactions") {
                  navigate("/transacciones");
                } else if (type == "issues") {
                  navigate("/morosidad");
                }
              }}
            >
              Ver Todo
            </button>
          )}
        </div>
        <div className="list-content overflow-auto hover:overflow-scroll">
          {transaccionesRecientes && renderItems()}
        </div>
      </div>
    </div>
  );
};

ListComponent.propTypes = {
  showMore: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["transactions", "issues"]).isRequired,
};

export default ListComponent;
