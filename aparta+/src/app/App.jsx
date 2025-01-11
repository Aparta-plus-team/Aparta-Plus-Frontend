import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "~/login";
import SignUp from "~/signUp";
import Reset from "~/reset";
import Code from "~/code";
import Confirm from "~/confirm";
import Account from "~/useraccount";
import Homepage from "~/homepage";
import Header from "*/header";
import AccountSidebar from "*/accountSidebar";
import GeneralSidebar from "*/generalsidebar";
import Input from "*/input";
import Searchbar from "*/searchbar";
import Factura from "~/factura";
import PropertyCard from "*/propertyCard";
import UploadDocuments from "*/uploadDocs";
import UploadImg from "*/uploadImg";
import Property from "~/properties";
import CardApart from "*/apartmentCard";
import ContractContainer from "*/contractContainer";
import ComboBox from "*/comboBox";
import Button from "*/button";
import DashboardCard from "*/dashboardCard";
import Dashboard from "~/dashboard";
import ListComponent from "*/ultimaTransaccion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Autenticacion */}
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/code" element={<Code />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/property" element={<Property />} />

        {/* Account */}
        <Route path="/account" element={<Account />} />

        {/* testing components */}
        <Route path="/header" element={<Header />} />
        <Route path="/accountsidebar" element={<AccountSidebar />} />
        <Route path="/generalsidebar" element={<GeneralSidebar />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/ultimaTransaccion"
          element={
            <div className="dashboard-lists">
              <ListComponent
                type="transactions"
                items={[
                  {
                    id: 1,
                    propertyName: "Casa de Juan",
                    date: "12 Sep 2024",
                    amount: 30,
                    image: "https://via.placeholder.com/50", // Imagen de prueba
                  },
                  {
                    id: 2,
                    propertyName: "Zona De Rico",
                    date: "10 Sep 2024",
                    amount: 10,
                    image: "https://via.placeholder.com/50", // Imagen de prueba
                  },
                  {
                    id: 3,
                    propertyName: "Diddy House",
                    date: "8 Sep 2024",
                    amount: 20,
                    image: "https://via.placeholder.com/50", // Imagen de prueba
                  },
                ]}
              />
              <ListComponent
                type="issues"
                items={[
                  {
                    id: 1,
                    propertyName: "721 Meadowview",
                    requestId: "MR-001",
                    description: "Basura Rota",
                    userName: "Jacob Jones",
                    userImage: "https://via.placeholder.com/50", // Imagen de prueba
                  },
                  {
                    id: 2,
                    propertyName: "721 Meadowview",
                    requestId: "MR-002",
                    description: "Baño Sin Calefacción",
                    userName: "Albert Flores",
                    userImage: "https://via.placeholder.com/50", // Imagen de prueba
                  },
                  {
                    id: 3,
                    propertyName: "721 Meadowview",
                    requestId: "MR-003",
                    description: "Ventilador No Funcional",
                    userName: "Robert Fox",
                    userImage: "https://via.placeholder.com/50", // Imagen de prueba
                  },
                ]}
              />
            </div>
          }
        />

        <Route
          path="/dashboardCard"
          element={
            <div className="dashboard-stats">
              <DashboardCard
                type="total"
                value={10}
                title="Propiedades total"
              />
              <DashboardCard
                type="rented"
                value={7}
                title="Propiedades alquilados"
              />
              <DashboardCard
                type="earnings"
                value={150}
                title="Ganancia Mensual"
              />
            </div>
          }
        />

        <Route
          path="/input"
          element={
            <Input
              isPassword={true}
              content="email"
              width="800px"
              onChange={(e) => {
                console.log(e);
              }}
            />
          }
        />

        <Route
          path="/combobox"
          element={
            <ComboBox
              options={["Uno", "Dos", "Tres"]}
              onChange={(e) => console.log(e)}
            />
          }
        />

        <Route
          path="/combobox"
          element={
            <ComboBox
              options={["Uno", "Dos", "Tres"]}
              onChange={(e) => console.log(e)}
            />
          }
        />

        <Route
          path="/button"
          element={
            <Button
              text="Hola"
              onClick={() => console.log("Hola")}
              color="blue"
              width="400px"
            />
          }
        />

        <Route path="/propertyCard" element={<PropertyCard />} />

        {/* Factura */}
        <Route path="/factura" element={<Factura />} />

        {/* UploadDocs */}
        <Route path="/uploaddocs" element={<UploadDocuments />} />

        {/* UploadImg */}
        <Route path="/uploadimg" element={<UploadImg />} />

        {/* ApartmentCard */}
        <Route path="/apartmentcard" element={<CardApart />} />

        {/* ContractContainer */}
        <Route path="/contractcontainer" element={<ContractContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
