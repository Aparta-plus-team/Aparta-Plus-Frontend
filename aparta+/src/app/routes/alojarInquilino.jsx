// import '+/alojarInquilino.scss';
// import React from 'react';
// import MainView from '*/mainView';
// import UploadDocs from '*/uploadDocs';
// import Input from '*/input';
// import ComboBox from '*/comboBox';
// import Button from '*/button';

// const AlojarInquilino = () => {

//     return (
//         <MainView sidebarType="thin">
//             <div className="alojar-inquilino">
//                 <h1 className='alojar-inquilino-title'>Alojar Inquilino</h1>
//                 <article className='contrato-Container'>
//                     <header>
//                         <h2 className='contrato-title'>Subir Contrato</h2>
//                     </header>
                        
//                     <UploadDocs className='uploadDocs-component' ></UploadDocs>
//                 </article>

//                 <div className='info-alojar-inquilino'>
//                     <header>
//                         <h2 className='info-title'>Información</h2>
//                     </header>
//                     <div>
//                         <p>Inquilino</p>
//                         <ComboBox
//                         options={["Aquilenyi", "Juan"]}
//                         onChange={(e) => console.log(e)}
//                         />
//                     </div>
//                     <div className='line'>
//                         <div>
//                             <p>Día dep ago</p>
//                             <Input placeholder='Introduce el dia de pago'></Input>
//                         </div>
//                         <div>
//                             <p>Monto</p>
//                             <Input placeholder='Introduce el monto'></Input>
//                         </div>
//                     </div>
//                     <div className='line'>
//                         <div>
//                             <p>Fecha de firma</p>
//                             <Input placeholder='Introduce la fecha de firma'></Input>
//                         </div>
//                         <div>
//                             <p>Fecha de terminación</p>
//                             <Input placeholder='Introduce la fecha de terminación'></Input>
//                         </div>
//                     </div>
//                     <div className='line'>
//                         <div>
//                             <p>Nombre del fiador</p>
//                             <Input placeholder='Introduce el nombre del fiador'></Input>
//                         </div>
//                         <div>
//                             <p>Teléfono del fiador</p>
//                             <Input placeholder='Introduce el telefono del fiador'></Input>
//                         </div>
//                     </div>
//                     <div className='last-line'>
//                         <div>
//                             <p>Correo del fiador</p>
//                             <Input placeholder='Introduce el correo del fiador'></Input>
//                         </div>
//                         <div className='buttons-container'>
//                             <Button text="Eliminar" color="blue" width="150px"></Button>
//                             <Button text="Crear" color="green" width="150px"></Button>   
//                         </div>                       
//                     </div>
//                 </div>
//             </div>
//         </MainView>
//     );
// }

// export default AlojarInquilino;



import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import MainView from "*/mainView";
import UploadDocs from "*/uploadDocs";
import Input from "*/input";
import ComboBox from "*/comboBox";
import Button from "*/button";
import "+/alojarInquilino.scss";

const GET_INQUILINOS = gql`
  query verInquilino {
    inquilinos(where: { estado: { eq: true } }) {
      items {
        inquilinoid
        inquilinonombre
      }
    }
  }
`;

const CREAR_CONTRATO = gql`
  mutation crearContrato(
    $inquilinoId: UUID!,
    $contratourl: String,
    $diapago: Int!,
    $mora: Int!,
    $precioalquiler: int!,
    $fechafirma: Date!,
    $fechaterminacion: Date!,
    $fiadornombre: String!,
    $fiadortelefono: String!,
    $fiadorcorreo: String!,
    $estado: Boolean!
  ) {
    createContrato(
      inquilinoId: $inquilinoId,
      contratourl: $contratourl,
      diapago: $diapago,
      mora: $mora,
      precioalquiler: $precioalquiler,
      fechafirma: $fechafirma,
      fechaterminacion: $fechaterminacion,
      fiadornombre: $fiadornombre,
      fiadortelefono: $fiadortelefono,
      fiadorcorreo: $fiadorcorreo,
      estado: $estado
    ) {
      contratoid
    }
  }
`;

const AlojarInquilino = () => {
  const [contratoData, setContratoData] = useState({
    inquilinoId: "",
    contratourl: "",
    diapago: "",
    mora: "0",
    precioalquiler: "",
    fechafirma: "",
    fechaterminacion: "",
    fiadornombre: "",
    fiadortelefono: "",
    fiadorcorreo: "",
    estado: true,
  });

  const { loading: loadingInquilinos, error: errorInquilinos, data: dataInquilinos } = useQuery(GET_INQUILINOS);
  const [createContrato, { loading, error }] = useMutation(CREAR_CONTRATO, {
    onCompleted: (data) => {
      console.log("Contrato creado:", data);
      alert("Contrato creado exitosamente.");
    },
    onError: (error) => {
      console.error("Error al crear el contrato:", error);
      alert(`Hubo un error al crear el contrato: ${error.message}`);
    },
  });

  const handleInputChange = (fieldName, value) => {
    setContratoData(prevData => ({
      ...prevData, 
      [fieldName]: value
    }));
  };

  const handleCrearContrato = () => {
    const requiredFields = [
      'inquilinoId', 'diapago', 'precioalquiler', 
      'fechafirma', 'fechaterminacion', 
      'fiadornombre', 'fiadortelefono', 'fiadorcorreo'
    ];

    const missingFields = requiredFields.filter(field => !contratoData[field]);

    if (missingFields.length > 0) {
      alert(`Por favor, complete los siguientes campos: ${missingFields.join(', ')}`);
      return;
    }

    // Verificar si el contrato tiene URL de documento, si no, enviar null
    const variables = { 
      ...contratoData, 
      contratourl: contratoData.contratourl || null, // Si no hay documento, pasar null
      diapago: parseInt(contratoData.diapago || '0'), 
      mora: parseInt(contratoData.mora || '0'), 
      precioalquiler: parseInt(contratoData.precioalquiler || '0')
    };

    try {
      createContrato({ variables });
    } catch (err) {
      console.error('Validation error:', err);
      alert('Error en la validación de datos');
    }
  };

  if (loadingInquilinos) return <p>Cargando inquilinos...</p>;
  if (errorInquilinos) return <p>Error al cargar inquilinos: {errorInquilinos.message}</p>;

  const inquilinosOptions = dataInquilinos?.inquilinos?.items.map((inquilino) => inquilino.inquilinonombre) || [];

  return (
    <MainView sidebarType="thin">
      <div className="alojar-inquilino">
        <h1 className='alojar-inquilino-title'>Alojar Inquilino</h1>
        <article className='contrato-Container'>
          <header>
            <h2 className='contrato-title'>Subir Contrato</h2>
          </header>
          <UploadDocs
            className='uploadDocs-component'
            onUpload={(url) => setContratoData(prev => ({ ...prev, contratourl: url }))}
          />
        </article>

        <div className='info-alojar-inquilino'>
          <header>
            <h2 className='info-title'>Información</h2>
          </header>
          <div>
            <p>Inquilino</p>
            <ComboBox
              options={inquilinosOptions}
              onChange={(valor) => {
                const selectedInquilino = dataInquilinos.inquilinos.items.find(
                  (inquilino) => inquilino.inquilinonombre === valor
                );
                setContratoData(prev => ({ ...prev, inquilinoId: selectedInquilino?.inquilinoid || "" }));
              }}
            />
          </div>
          <div className='line'>
            <div>
              <p>Día de pago</p>
              <Input
                value={contratoData.diapago}
                onChange={(valor) => handleInputChange("diapago", valor)}
                placeholder='Introduce el día de pago'
              />
            </div>
            <div>
              <p>Monto</p>
              <Input
                value={contratoData.precioalquiler}
                onChange={(valor) => handleInputChange("precioalquiler", valor)}
                placeholder='Introduce el monto'
              />
            </div>
          </div>
          <div className='line'>
            <div>
              <p>Fecha de firma</p>
              <Input
                value={contratoData.fechafirma}
                onChange={(valor) => handleInputChange("fechafirma", valor)}
                placeholder='Introduce la fecha de firma'
              />
            </div>
            <div>
              <p>Fecha de terminación</p>
              <Input
                value={contratoData.fechaterminacion}
                onChange={(valor) => handleInputChange("fechaterminacion", valor)}
                placeholder='Introduce la fecha de terminación'
              />
            </div>
          </div>
          <div className='line'>
            <div>
              <p>Nombre del fiador</p>
              <Input
                value={contratoData.fiadornombre}
                onChange={(valor) => handleInputChange("fiadornombre", valor)}
                placeholder='Introduce el nombre del fiador'
              />
            </div>
            <div>
              <p>Teléfono del fiador</p>
              <Input
                value={contratoData.fiadortelefono}
                onChange={(valor) => handleInputChange("fiadortelefono", valor)}
                placeholder='Introduce el teléfono del fiador'
              />
            </div>
          </div>
          <div className='last-line'>
            <div>
              <p>Correo del fiador</p>
              <Input
                value={contratoData.fiadorcorreo}
                onChange={(valor) => handleInputChange("fiadorcorreo", valor)}
                placeholder='Introduce el correo del fiador'
              />
            </div>
            <div className='buttons-container'>
              <Button text="Eliminar" color="blue" width="150px" />
              <Button
                text={loading ? "Creando..." : "Crear"}
                color="green"
                width="150px"
                onClick={handleCrearContrato}
              />
            </div>                       
          </div>
        </div>
      </div>
    </MainView>
  );
};

export default AlojarInquilino;
