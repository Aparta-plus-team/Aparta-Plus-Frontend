  // import { useState, useEffect } from "react";
  // import { useNavigate, useParams } from "react-router-dom";
  // import MainView from "*/mainView";
  // import Input from "*/input";
  // import Button from "*/button";

  // export default function EditarFormularioInquilino() {
  //   const navegar = useNavigate();
  //   const { id } = useParams(); 
  //   const esEdicion = Boolean(id);

  //   const [datosFormulario, setDatosFormulario] = useState({
  //     nombre: "",
  //     apellido: "",
  //     genero: "",
  //     correo: "",
  //     apartamento: "",
  //     telefono: "",
  //   });

  //   useEffect(() => {
  //     if (esEdicion) {
  //       const datosSimulados = {
  //         nombre: "Keven",
  //         apellido: "Shein",
  //         genero: "Masculino",
  //         correo: "keven.g@gmail.com",
  //         apartamento: "Apartamento Taiwané",
  //         telefono: "809-000-0000",
  //       };
  //       setDatosFormulario(datosSimulados);
  //     }
  //   }, [id, esEdicion]);

  //   const manejarCambio = (campo, valor) => {
  //     setDatosFormulario({ ...datosFormulario, [campo]: valor });
  //   };

  //   const manejarGuardar = () => {
  //     console.log("Datos actualizados:", datosFormulario);
  //     navegar("/inquilinos");
  //   };

  //   return (
  //     <MainView sidebarType="thin">
  //       <div className="h-full w-full overflow-y-scroll">
  //         <div className="main-content h-full px-8">
  //           <div className="mt-24 mb-16">
  //             <h1 className="text-4xl font-bold">
  //               Editar Inquilino
  //             </h1>
  //           </div>

  //           <div className="form-container max-w-4xl">
  //             <div className="form-row flex gap-8 mb-8">
  //               <Input 
  //                 content="Nombre" 
  //                 value={datosFormulario.nombre} 
  //                 onChange={(valor) => manejarCambio("nombre", valor)} 
  //                 width="400px" 
  //                 fontSize="16px" 
  //               />
  //               <Input 
  //                 content="Apellido" 
  //                 value={datosFormulario.apellido} 
  //                 onChange={(valor) => manejarCambio("apellido", valor)} 
  //                 width="400px" 
  //                 fontSize="16px" 
  //               />
  //             </div>

  //             <div className="form-row flex gap-8 mb-8">
  //               <Input 
  //                 content="Género" 
  //                 value={datosFormulario.genero} 
  //                 onChange={(valor) => manejarCambio("genero", valor)} 
  //                 width="400px" 
  //                 fontSize="16px" 
  //               />
  //               <Input 
  //                 content="Correo" 
  //                 value={datosFormulario.correo} 
  //                 onChange={(valor) => manejarCambio("correo", valor)} 
  //                 width="400px" 
  //                 fontSize="16px" 
  //               />
  //             </div>

  //             <div className="form-row flex gap-8 mb-8">
  //               <Input 
  //                 content="Apartamento Asociado" 
  //                 value={datosFormulario.apartamento} 
  //                 onChange={(valor) => manejarCambio("apartamento", valor)} 
  //                 width="400px" 
  //                 fontSize="16px" 
  //               />
  //               <Input 
  //                 content="Teléfono" 
  //                 value={datosFormulario.telefono} 
  //                 onChange={(valor) => manejarCambio("telefono", valor)} 
  //                 width="400px" 
  //                 fontSize="16px" 
  //               />
  //             </div>
  //           </div>

  //           <div className="button-group flex gap-4 justify-end mt-8">
  //             <Button 
  //               text="Cancelar" 
  //               color="blue" 
  //               onClick={() => navegar("/inquilinos")} 
  //               width="150px" 
  //               height="45px" 
  //               fontSize="16px" 
  //             />
  //             <Button 
  //               text="Guardar" 
  //               color="green" 
  //               onClick={manejarGuardar} 
  //               width="150px" 
  //               height="45px" 
  //               fontSize="16px" 
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </MainView>
  //   );
  // }


  
  import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainView from "*/mainView";
import Input from "*/input";
import Button from "*/button";

import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

// Consulta para obtener el inquilino
const VER_INQUILINO = gql`
  query verInquilino($inquilinoId: String!) {
    inquilinos {
      items {
        estado
        inquilinocorreo
        inquilinogenero
        inquilinoid
        inquilinonombre
        inquilinotelefono
      }
    }
  }
`;

// Mutación para actualizar el inquilino
const ACTUALIZAR_INQUILINO = gql`
  mutation actualizarInquilino(
    $inquilinoId: String!
    $inquilinoNombre: String!
    $inquilinoTelefono: String!
    $inquilinoCorreo: String!
    $inquilinoGenero: Boolean!
    $estado: Boolean!
  ) {
    updateInquilino(
      inquilinoId: $inquilinoId
      inquilinoNombre: $inquilinoNombre
      inquilinoTelefono: $inquilinoTelefono
      inquilinoCorreo: $inquilinoCorreo
      inquilinoGenero: $inquilinoGenero
      estado: $estado
    ) {
      estado
      inquilinocorreo
      inquilinogenero
      inquilinoid
      inquilinonombre
      inquilinotelefono
    }
  }
`;

export default function EditarFormularioInquilino() {
  const navegar = useNavigate();
  const { id } = useParams();
  const esEdicion = Boolean(id);

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    generoValue: false,
    correo: "",
    apartamento: "",
    telefono: "",
    estado: true,
  });

  const { loading, error, data } = useQuery(VER_INQUILINO, {
    variables: { inquilinoId: id }, // Aseguramos que estamos pasando el ID al hacer la consulta
  });
  
  const [actualizarInquilino] = useMutation(ACTUALIZAR_INQUILINO);

  useEffect(() => {
    if (esEdicion && data) {
      const inquilinoActual = data.inquilinos.items.find(
        (inquilino) => inquilino.inquilinoid === id
      );

      if (inquilinoActual) {
        setDatosFormulario({
          nombre: inquilinoActual.inquilinonombre,
          apellido: datosFormulario.apellido,
          genero: inquilinoActual.inquilinogenero ? "Femenino" : "Masculino",
          generoValue: inquilinoActual.inquilinogenero,
          correo: inquilinoActual.inquilinocorreo,
          apartamento: datosFormulario.apartamento,
          telefono: inquilinoActual.inquilinotelefono,
          estado: inquilinoActual.estado,
        });
      }
    }
  }, [id, esEdicion, data]);

  const manejarCambio = (campo, valor) => {
    if (campo === "genero") {
      setDatosFormulario({
        ...datosFormulario,
        genero: valor,
        generoValue: valor === "Femenino",
      });
    } else {
      setDatosFormulario({ ...datosFormulario, [campo]: valor });
    }
  };

  const manejarGuardar = async () => {
    try {
      await actualizarInquilino({
        variables: {
          inquilinoId: id,
          inquilinoNombre: datosFormulario.nombre,
          inquilinoTelefono: datosFormulario.telefono,
          inquilinoCorreo: datosFormulario.correo,
          inquilinoGenero: datosFormulario.generoValue,
          estado: datosFormulario.estado,
        },
      });
      navegar("/inquilinos");
    } catch (error) {
      console.error("Error al actualizar inquilino:", error);
      alert("Error al actualizar el inquilino.");
    }
  };

  const manejarEliminar = async () => {
    try {
      await actualizarInquilino({
        variables: {
          inquilinoId: id,
          inquilinoNombre: datosFormulario.nombre,
          inquilinoTelefono: datosFormulario.telefono,
          inquilinoCorreo: datosFormulario.correo,
          inquilinoGenero: datosFormulario.generoValue,
          estado: false,  // El estado se marca como false para eliminar
        },
      });
      navegar("/inquilinos");
    } catch (error) {
      console.error("Error al eliminar inquilino:", error);
      alert("Error al eliminar el inquilino.");
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los datos</div>;

  return (
    <MainView sidebarType="thin">
      <div className="h-full w-full overflow-y-scroll">
        <div className="main-content h-full px-8">
          <div className="mt-24 mb-16">
            <h1 className="text-4xl font-bold">Editar Inquilino</h1>
          </div>

          <div className="form-container max-w-4xl">
            <div className="form-row flex gap-8 mb-8">
              <Input
                content="Nombre"
                value={datosFormulario.nombre}
                onChange={(valor) => manejarCambio("nombre", valor)}
                width="400px"
                fontSize="16px"
              />
              <Input
                content="Apellido"
                value={datosFormulario.apellido}
                onChange={(valor) => manejarCambio("apellido", valor)}
                width="400px"
                fontSize="16px"
              />
            </div>

            <div className="form-row flex gap-8 mb-8">
              <Input
                content="Género"
                type="select"
                options={[
                  { value: "Masculino", label: "Masculino" },
                  { value: "Femenino", label: "Femenino" },
                ]}
                value={datosFormulario.genero}
                onChange={(valor) => manejarCambio("genero", valor)}
                width="400px"
                fontSize="16px"
              />
              <Input
                content="Correo"
                value={datosFormulario.correo}
                onChange={(valor) => manejarCambio("correo", valor)}
                width="400px"
                fontSize="16px"
              />
            </div>

            <div className="form-row flex gap-8 mb-8">
              <Input
                content="Apartamento Asociado"
                value={datosFormulario.apartamento}
                onChange={(valor) => manejarCambio("apartamento", valor)}
                width="400px"
                fontSize="16px"
              />
              <Input
                content="Teléfono"
                value={datosFormulario.telefono}
                onChange={(valor) => manejarCambio("telefono", valor)}
                width="400px"
                fontSize="16px"
              />
            </div>
          </div>

          <div className="button-group flex gap-4 justify-end mt-8">
            <Button
              text="Eliminar"
              color="red"
              onClick={manejarEliminar}
              width="150px"
              height="45px"
              fontSize="16px"
            />
            <Button
              text="Guardar"
              color="green"
              onClick={manejarGuardar}
              width="150px"
              height="45px"
              fontSize="16px"
            />
          </div>
        </div>
      </div>
    </MainView>
  );
}
