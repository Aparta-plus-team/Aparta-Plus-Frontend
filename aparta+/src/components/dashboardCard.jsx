import PropTypes from 'prop-types';
import '+/dashboardCard.component.scss';

const DashboardCard = ({ type, value, title }) => {
  const getIconClass = () => {
    switch (type) {
      case 'total':
        return 'home';
      case 'rented':
        return 'real_estate_agent';
      case 'earnings':
        return 'payments';
      default:
        return 'info';
    }
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <div className={`card-icon icon-${type}`}>
          <span className="material-symbols-outlined text-white">
            {getIconClass()}
          </span>
        </div>
        <p className="card-title">{title}</p>
      </div>
      <p className={`card-value value-${type}`}>
        {type === 'earnings' ? `$${value}k` : value}
      </p>
    </div>
  );
};

DashboardCard.propTypes = {
  type: PropTypes.oneOf(['total', 'rented', 'earnings']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired
};

export default DashboardCard;