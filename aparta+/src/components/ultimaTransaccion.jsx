import PropTypes from 'prop-types';
import '+/ultimaTransaccion.component.scss';

const ListComponent = ({ type, items }) => {
  const renderHeader = () => {
    return type === 'transactions' ? 'Última Transacción' : 'Morosidad';
  };

  const renderItems = () => {
    if (type === 'transactions') {
      return items.map((item) => (
        <div key={item.id} className="transaction-item">
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
      ));
    } else if (type === 'issues') {
      return items.map((item) => (
        <div key={item.id} className="issue-item">
          <div className="issue-info">
            <div className="issue-status" />
            <div className="issue-details">
              <div className="property-info">
                <h3>{item.propertyName}</h3>
                <span className="request-id">{item.requestId}</span>
              </div>
              <p className="issue-description">{item.description}</p>
            </div>
          </div>
          <div className="user-info">
            <img src={item.userImage} alt={item.userName} className="user-avatar" />
            <span className="user-name">{item.userName}</span>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className={`list-component ${type}`}>
      <div className="list-header">
        <h2>{renderHeader()}</h2>
        <button className="view-all">Ver Todo</button>
      </div>
      <div className="list-content">{renderItems()}</div>
    </div>
  );
};

ListComponent.propTypes = {
  type: PropTypes.oneOf(['transactions', 'issues']).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        propertyName: PropTypes.string.isRequired,
        date: PropTypes.string,
        amount: PropTypes.number,
        image: PropTypes.string,
      }),
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        propertyName: PropTypes.string.isRequired,
        requestId: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        userImage: PropTypes.string.isRequired,
      }),
    ])
  ).isRequired,
};

export default ListComponent;
