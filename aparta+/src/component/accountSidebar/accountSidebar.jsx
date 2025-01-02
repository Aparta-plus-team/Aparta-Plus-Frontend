import "./accountSidebar.css";
function AccountSidebar() {
  return (
    <div className="accountSidebar">
      <button onClick={() => window.history.back()} className="back-btn">
        ←
      </button>
    </div>
  );
}

export default AccountSidebar;

