import { useQuery, gql } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "~/login";
import SignUp from "~/signUp";
import Reset from "~/reset";
import Code from "~/code";
import Confirm from "~/confirm";
import Account from "~/useraccount";
import Homepage from "~/homepage";
import Header from "*/header";
import Input from "*/input";
import Searchbar from "*/searchbar";
import Factura from "~/factura";
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
import ListComponent from "*/ultimaTransaccion";
import Transactions from "~/transactions";
import MainView from "*/mainView";
import Morosity from "~/morosidad";
import ReporteVentas from "*/reporteVentas";
import FormularioInquilino from "~/crearInquilino";
import EditarFormularioInquilino from "~/editarInquilino";
import FormularioPropiedad from "~/crearPropiedad";
import CodeSignUp from "./routes/codeSignUp";
import ProtectedRoutes from "../utilis/ProtectedRoutes";
import VerApartamentos from "~/verApartamentos";
import VerPropiedades from "~/verPropiedades";
import CrearApartamento from "~/crearApartamento";
import AlojarInquilino from "~/alojarInquilino";
import Matrix from '*/Matrix';
import EditarApartamento from "~/editarApartamento";
import PagoExitoso from "~/pagoExitoso";

function App() {
  const GET_CONTRATOS = gql`
    query we {
      contratos {
        items {
          contratoid
          contratourl
          diapago
          estado
          fechafirma
          fechaterminacion
          fiadorcorreo
          fiadornombre
          fiadortelefono
          inquilinoid
          mora
          precioalquiler
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CONTRATOS);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-5xl font-bold">Loading </p>
        <img
          src="https://cdn.statically.io/img/www.blogson.com.br/wp-content/uploads/2017/10/584b607f5c2ff075429dc0e7b8d142ef.gif"
          alt=""
        />
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-9xl font-sans font-bold text-red-600">
          ERROR \(.___.)/{" "}
        </p>
        <p className="text-xl font-sans text-red-600 m-7">
          Query failed! (Enciende la API del backend)
        </p>
      </div>
    );

  console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-svh">
              <h1 className="text-center m-auto font-black text-9xl font-sans">
                \(＞﹏＜)/ Page not found
              </h1>
            </div>
          }
        />
        {/* Autenticacion */}
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/code" element={<Code />} />
        <Route path="/confirmSignUp/:email" element={<CodeSignUp />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/property" element={<Property />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/inquilinos" element={<InquilinosPage />} />
        <Route path="/crearinquilino" element={<FormularioInquilino />} />
        <Route
          path="/editarinquilino/:id"
          element={<EditarFormularioInquilino />}
        />
        <Route path="/crearpropiedad" element={<FormularioPropiedad />} />
        <Route path="/crearapartamento" element={<CrearApartamento />} />
        <Route path="/editarapartamento" element={<EditarApartamento />} />
        <Route
          path="/editarinquilino/:id"
          element={<EditarFormularioInquilino />}
        />

        {/* Account */}
        <Route path="/account" element={<Account />} />

        {/* testing components */}
        <Route path="/header" element={<Header />} />
        <Route path="/searchbar" element={<Searchbar />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/transacciones" element={<Transactions />} />

        <Route path="/morosidad" element={<Morosity />} />

        <Route path="/ventas" element={<ReporteVentas />} />

        <Route
          path="/mainview"
          element={
            <MainView sidebarType="full">
              <h1>hola, esta es la pantalla principal!</h1>
            </MainView>
          }
        />

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
                    image:
                      "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
                  },
                  {
                    id: 2,
                    propertyName: "Zona De Rico",
                    date: "10 Sep 2024",
                    amount: 10,
                    image:
                      "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
                  },
                  {
                    id: 3,
                    propertyName: "Diddy House",
                    date: "8 Sep 2024",
                    amount: 20,
                    image:
                      "https://i.pinimg.com/originals/cd/0f/a9/cd0fa90cecdebe5b881e8a339a29955f.jpg", // Imagen de prueba
                  },
                ]}
              />
              <ListComponent
                type="issues"
                items={[
                  {
                    id: 1,
                    propertyName: "721 Meadowview",
                    userName: "Jacob Jones",
                    userImage:
                      "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
                  },
                  {
                    id: 2,
                    propertyName: "721 Meadowview",
                    userName: "Albert Flores",
                    userImage:
                      "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
                  },
                  {
                    id: 3,
                    propertyName: "721 Meadowview",
                    userName: "Robert Fox",
                    userImage:
                      "https://www.elementr.media/wp-content/uploads/2015/07/man-square-1.png", // Imagen de prueba
                  },
                ]}
              />
            </div>
          }
        />

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
          
        {/* VerApartamentos */}
        <Route path="/verapartamentos" element={<VerApartamentos />} />
        
        {/* Matrix */}
        <Route path="/matrix" element={<Matrix />} />

        {/* VerPropiedades */}
        <Route path="/verpropiedades" element={<VerPropiedades />} />
        
        {/* AlojarInquilino */}
        <Route path="/alojarinquilino" element={<AlojarInquilino />} />

        {/* PagoExitoso */}
        <Route path="/pagoexitoso" element={<PagoExitoso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
