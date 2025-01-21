import ListComponent from "*/ultimaTransaccion";
import MainView from "*/mainView";

const Transactions = () => {
  return (
    <MainView sidebarType="thin">
      <ListComponent
        showMore={false}
        type="transactions"
      />
    </MainView>
  );
};

export default Transactions;
