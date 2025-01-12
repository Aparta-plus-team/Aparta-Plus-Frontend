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
import TablaInquilinos from "*/tablaInquilinos";
import InquilinosPage from "~/inquilinos";

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inquilinos" element={<InquilinosPage />} />

        {/* Account */}
        <Route path="/account" element={<Account />} />

        {/* testing components */}
        <Route path="/header" element={<Header />} />
        <Route path="/accountsidebar" element={<AccountSidebar />} />
        <Route path="/generalsidebar" element={<GeneralSidebar />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/tablaInquilinos"
          element={
            <TablaInquilinos
              inquilinos={[
                {
                  nombre: "Keven",
                  apellido: "Shein",
                  correo: "keven.g@gmail.com",
                  apartamento: "Apartamento Taiwané",
                  estado: "Pagado",
                },
                // Puedes agregar más inquilinos aquí
              ]}
            />
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
