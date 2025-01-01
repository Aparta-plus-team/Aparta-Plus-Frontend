import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <button onClick={() => window.history.back()} className="back-btn">
        ←
      </button>
    </div>
  );
}

export default Sidebar;

