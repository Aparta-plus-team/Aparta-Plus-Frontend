import '+/alojarInquilino.scss';
import React from 'react';
import MainView from '*/mainView';
import UploadDocs from '*/uploadDocs';
import Input from '*/input';
import ComboBox from '*/comboBox';
import Button from '*/button';

const AlojarInquilino = () => {

    return (
        <MainView sidebarType="thin">
            <div className="alojar-inquilino">
                <h1 className='alojar-inquilino-title'>Alojar Inquilino</h1>
                <article className='contrato-Container'>
                    <header>
                        <h2 className='contrato-title'>Subir Contrato</h2>
                    </header>
                        
                    <UploadDocs className='uploadDocs-component' ></UploadDocs>
                </article>

                <div className='info-alojar-inquilino'>
                    <header>
                        <h2 className='info-title'>Información</h2>
                    </header>

                    <ComboBox
                    content="Inquilino"
                    selectedOption="Selecciona el inquilino"
                    options={["Aquilenyi", "Juan"]}
                    onChange={(e) => console.log(e)}
                    />
                    <div className='line'>
                        <div>
                            <p>Día dep ago</p>
                            <Input placeholder='Introduce el dia de pago'></Input>
                        </div>
                        <div>
                            <p>Monto</p>
                            <Input placeholder='Introduce el monto'></Input>
                        </div>
                    </div>
                    <div className='line'>
                        <div>
                            <p>Fecha de firma</p>
                            <Input placeholder='Introduce la fecha de firma'></Input>
                        </div>
                        <div>
                            <p>Fecha de terminación</p>
                            <Input placeholder='Introduce la fecha de terminación'></Input>
                        </div>
                    </div>
                    <div className='line'>
                        <div>
                            <p>Nombre del fiador</p>
                            <Input placeholder='Introduce el nombre del fiador'></Input>
                        </div>
                        <div>
                            <p>Teléfono del fiador</p>
                            <Input placeholder='Introduce el telefono del fiador'></Input>
                        </div>
                    </div>
                    <div className='last-line'>
                        <div>
                            <p>Correo del fiador</p>
                            <Input placeholder='Introduce el correo del fiador'></Input>
                        </div>
                        <div className='buttons-container'>
                            <Button text="Eliminar" color="blue" width="150px"></Button>
                            <Button text="Crear" color="green" width="150px"></Button>   
                        </div>                       
                    </div>
                </div>
            </div>
        </MainView>
    );
}

export default AlojarInquilino;