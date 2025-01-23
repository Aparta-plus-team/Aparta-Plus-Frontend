// import MainView from "*/mainView";
// import ApartamentCard from "*/apartmentCard";
// import Button from "*/button";
// import ContractApartment from "*/contractContainer";
// import Matrix from "*/matrix";
// import "+/verApartamentos.scss";

// const VerApartamentos = () => {
//     return (
//         <MainView sidebarType="thin">
//             <div className="apartament-page">
//                 <h1 className="page-title">B4</h1>

//                 <section className="apartment-details-section">
//                     <div className="apartment-overview">
//                         <div className="apartment-header">
//                             <h2 className="apartment-name">BZ5</h2>
//                         </div>
//                         <div className="action-buttons">
//                             <Button text="Eliminar" color="blue" width="150px"></Button>
//                             <Button text="Editar" color="green" width="150px"></Button>
//                             <Button text="Desalojar Inquilino" color="red" width="190px"></Button>

//                         </div>
//                     </div>
//                     <div className="apartment-cards">
//                         <ApartamentCard></ApartamentCard>
//                         <ApartamentCard></ApartamentCard>
//                         <ApartamentCard></ApartamentCard>
//                     </div>
//                 </section>

//                 <section className="apartment-info-section">
//                     <header className="info-header"><h2>Información</h2></header>
//                     <body className="info-details">
//                         <p><strong>Inquilino:</strong> Aquilenyi Suero De Los Santos</p>
//                         <p><strong>Monto:</strong> 30,000</p>
//                         <div className="apartment-details">
//                             <div className="room-details">
//                                 <p><strong>Habitaciones:</strong> 3</p>
//                                 <p><strong>Amueblado:</strong> No</p>
//                             </div>
//                             <div className="additional-info">
//                                 <p><strong>Parqueo:</strong> Si</p>
//                                 <p><strong>Baños:</strong> 4</p>
//                             </div>
//                         </div>
//                     </body>
//                 </section>

//                 <section className="document-section">
//                     <h2 className="documents-title">Documentos</h2>
//                     <ContractApartment></ContractApartment>
//                 </section>

//                 <section className="statistics-section">
//                     <Matrix tipo="estadisticas" nombreApartamento="Z05" nombreInquilino="Aquilenyi Suero De Los Santos" monto="35,000"></Matrix>
//                 </section>
//             </div>
//         </MainView>
//     );
// }

// export default VerApartamentos;

import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import MainView from "*/mainView";
import ApartamentCard from "*/apartmentCard";
import Button from "*/button";
import ContractApartment from "*/contractContainer";
import Matrix from "*/matrix";
import "+/verApartamentos.scss";

// Query y mutaciones
const GET_APARTMENTS = gql`
  query verApps($id: UUID!) {
    inmuebles(where: { inmuebleid: { eq: $id } }) {
      items {
        codigo
        fechacreacion
        inmuebleid
        numbanos
        numhabitaciones
        ocupacion
        tieneparqueo
        propiedad {
          propiedadid
          inmuebles {
            inmuebleid
            codigo
            contrato {
              precioalquiler
              inquilino {
                inquilinonombre
              }
            }
          }
        }
        contratoid
      }
    }
  }
`;

const DELETE_INMUEBLE = gql`
  mutation deleteInmueble($id: String!) {
    deleteInmueble(inmuebleId: $id) {
      inmuebleid
    }
  }
`;

const UPDATE_INMUEBLE = gql`
  mutation updateInmueble(
    $inmuebleId: String!
    $codigo: String!
    $ocupacion: Boolean!
    $tieneParqueo: Boolean!
    $numBanos: Int!
    $numHabitaciones: Int!
    $propiedadId: String!
    $contratoId: String!
  ) {
    updateInmueble(
      inmuebleId: $inmuebleId
      codigo: $codigo
      ocupacion: $ocupacion
      tieneParqueo: $tieneParqueo
      numBanos: $numBanos
      numHabitaciones: $numHabitaciones
      propiedadId: $propiedadId
      contratoId: $contratoId
    ) {
      codigo
      inmuebleid
      numbanos
      numhabitaciones
      ocupacion
      tieneparqueo
    }
  }
`;

const VerApartamentos = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_APARTMENTS, {
    variables: { id },
  });
  const [deleteInmueble] = useMutation(DELETE_INMUEBLE);
  const [updateInmueble] = useMutation(UPDATE_INMUEBLE);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error.message}</p>;

  const apartments = data?.inmuebles?.items || [];
  const apartment = apartments[0];
  const relatedApartments = apartment?.propiedad?.inmuebles || [];
  const precioAlquiler =
    apartment?.propiedad?.inmuebles?.[0]?.contrato?.precioalquiler || "N/A";
  const inquilinoNombre =
    apartment?.propiedad?.inmuebles?.[0]?.contrato?.inquilino
      ?.inquilinonombre || "N/A";

  // Funciones para las acciones de los botones
  const handleDelete = async () => {
    try {
      await deleteInmueble({ variables: { id: apartment.inmuebleid } });
      alert("Inmueble eliminado con éxito");
    } catch (err) {
      console.error("Error al eliminar el inmueble:", err);
      alert("No se pudo eliminar el inmueble.");
    }
  };

  const handleUpdate = async () => {
    try {
      await updateInmueble({
        variables: {
          inmuebleId: apartment.inmuebleid,
          codigo: apartment.codigo || "SIN_CODIGO",
          ocupacion: apartment.ocupacion || false,
          tieneParqueo: apartment.tieneparqueo || false,
          numBanos: apartment.numbanos || 0,
          numHabitaciones: apartment.numhabitaciones || 0,
          propiedadId: apartment.propiedad.propiedadid,
          contratoId: apartment.contratoid || "SIN_CONTRATO",
        },
      });
      alert("Inmueble actualizado con éxito");
    } catch (err) {
      console.error("Error al actualizar el inmueble:", err);
      alert("No se pudo actualizar el inmueble.");
    }
  };

  return (
    <MainView sidebarType="thin">
      <div className="apartament-page">
        <h1 className="page-title">{apartment?.codigo || "Sin Código"}</h1>

        <section className="apartment-details-section">
          <div className="apartment-overview">
            <div className="apartment-header">
              <h2 className="apartment-name">
                {apartment?.codigo || "Sin Código"}
              </h2>
            </div>
            <div className="action-buttons">
              <Button
                text="Eliminar"
                color="blue"
                width="150px"
                onClick={handleDelete}
              />
              <Button
                text="Editar"
                color="green"
                width="150px"
                onClick={handleUpdate}
              />
              <Button text="Desalojar Inquilino" color="red" width="190px" />
            </div>
          </div>
          <div className="apartment-cards">
            <ApartamentCard
              idApartamento="efd07ccc-3f1e-4865-b840-ab7cbb5a3cc8"
              codigo="A03"
              inquilino="Wardell Stephen C."
              monto="25,000"
            />
            <ApartamentCard
              idApartamento="efd07ccc-3f1e-4865-b840-ab7cbb5a3cc8"
              codigo="A03"
              inquilino="Wardell Stephen C."
              monto="25,000"
            />
            <ApartamentCard
              idApartamento="efd07ccc-3f1e-4865-b840-ab7cbb5a3cc8"
              codigo="A03"
              inquilino="Wardell Stephen C."
              monto="25,000"
            />
          </div>
        </section>

        <section className="apartment-info-section">
          <header className="info-header">
            <h2>Información</h2>
          </header>
          <body className="info-details">
            <p>
              <strong>Inquilino:</strong> {inquilinoNombre}
            </p>
            <p>
              <strong>Monto:</strong> {precioAlquiler}
            </p>
            <div className="apartment-details">
              <div className="room-details">
                <p>
                  <strong>Habitaciones:</strong>{" "}
                  {apartment?.numhabitaciones || "N/A"}
                </p>
                <p>
                  <strong>Amueblado:</strong> No
                </p>
              </div>
              <div className="additional-info">
                <p>
                  <strong>Parqueo:</strong>{" "}
                  {apartment?.tieneparqueo ? "Sí" : "No"}
                </p>
                <p>
                  <strong>Baños:</strong> {apartment?.numbanos || "N/A"}
                </p>
              </div>
            </div>
          </body>
        </section>

        <section className="document-section">
          <h2 className="documents-title">Documentos</h2>
          <ContractApartment />
        </section>

        <section className="statistics-section">
          <Matrix
            tipo="estadisticas"
            nombreApartamento={apartment?.codigo || "N/A"}
            nombreInquilino={inquilinoNombre}
            monto={precioAlquiler}
          />
        </section>
      </div>
    </MainView>
  );
};

export default VerApartamentos;
