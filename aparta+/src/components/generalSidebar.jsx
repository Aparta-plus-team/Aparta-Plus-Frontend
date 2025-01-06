import "+/generalSidebar.component.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <div className="sidebar__item">
          <a href="/dashboard" className="sidebar__link">
            Dashboard
          </a>
        </div>
        
        <div className="sidebar__item">
          <a href="/propiedades" className="sidebar__link sidebar__link--active">
            Propiedades
          </a>
        </div>

        <div className="sidebar__item">
          <a href="/inquilinos" className="sidebar__link">
            Inquilinos
          </a>
        </div>

        <div className="sidebar__item">
          <a href="/reportes" className="sidebar__link">
            Reportes
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

