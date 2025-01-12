import PropTypes from "prop-types";
import "+/ultimaTransaccion.component.scss";
import { NavLink, useNavigate } from "react-router-dom";

const ListComponent = ({ type, items }) => {
  let navigate = useNavigate();

  const renderHeader = () => {
    return type === "transactions" ? "Última Transacción" : "Morosidad";
  };

  const renderItems = () => {
    if (type === "transactions") {
      return items.map((item) => (
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
      return items.map((item) => (
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
        </div>
        <div className="list-content overflow-auto hover:overflow-scroll">
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

ListComponent.propTypes = {
  type: PropTypes.oneOf(["transactions", "issues"]).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        propertyName: PropTypes.string.isRequired,
        date: PropTypes.string,
        amount: PropTypes.number,
        image: PropTypes.string,
      }),
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        propertyName: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        userImage: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
};

export default ListComponent;
