import "+/accountSidebar.component.scss";
function AccountSidebar() {
  return (
    <div className="accountSidebar">
      <button onClick={() => window.history.back()} className="back-btn">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.53125 12.625L1.90625 7L7.53125 1.375M2.6875 7H14.0938" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default AccountSidebar;

