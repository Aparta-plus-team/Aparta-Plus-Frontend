import PropTypes from 'prop-types';
import '+/generalSidebar.component.scss';

const Sidebar = ({ selected }) => {
  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Propiedades', href: '/property' },
    { name: 'Inquilinos', href: '/inquilinos' },
    // { name: 'Reportes', href: '/reportes' }
  ];

  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        {links.map((link) => (
          <div key={link.name} className="sidebar__item">
            <a
              href={link.href}
              className={`sidebar__link ${
                selected === link.href ? 'sidebar__link--active' : ''
              }`}
            >
              {link.name}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  selected: PropTypes.string.isRequired
};

export default Sidebar;
