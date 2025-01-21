import ListComponent from "*/ultimaTransaccion";
import MainView from "*/mainView";

const Morosity = () => {
  return (
    <MainView sidebarType="thin">
      <ListComponent
        showMore={false}
        type="issues"
      />
    </MainView>
  );
};

export default Morosity;
