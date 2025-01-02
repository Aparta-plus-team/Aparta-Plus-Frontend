import "./generalSidebar.css";
function GeneralSidebar() {
  return (
    <div className="generalSidebar">
      <button onClick={() => window.history.back()} className="back-btn">
        ←
      </button>
    </div>
  );
}

export default GeneralSidebar;

