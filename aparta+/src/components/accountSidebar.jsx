import "+/accountSidebar.component.scss";
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

