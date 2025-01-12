import PropTypes from "prop-types";
import Header from "*/header";
import Sidebar from "*/generalSidebar";
import { useLocation } from "react-router-dom";

const MainView = ({ children }) => {
  const location = useLocation();
  return (
    <div className="dashboard flex flex-col h-svh">
      {/* Header debe estar fuera del contenido principal para que sea fijo en la parte superior */}
      <Header />
      <div className="principal-content">
        {/* Sidebar */}
        <Sidebar selected={location.pathname} />

        {/* Contenido principal */}

        <div className="h-full w-full overflow-y-scroll ">{children}</div>
      </div>
    </div>
  );
};

MainView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
])
};

export default MainView;
