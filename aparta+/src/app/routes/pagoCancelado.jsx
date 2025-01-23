import "+/pagoCancelado.scss";

const pagoCancelado = () => {
    return (
        <div className='body-pago-cancel'>
            <div className="tarjeta-pago">
                <div className="icono-error"></div>
                <h1 className="titulo">Pago Cancelado</h1>
                <p className="mensaje">Lo sentimos, tu pago no pudo ser procesado.</p>
                
                <div className="detalles">
                    <p className="detalles-error">Motivo: Transacción cancelada por el usuario</p>
                    <p className="numero-transaccion">ID de Transacción: #123456789</p>
                </div>

                <div className="contenedor-botones">
                    <button className="boton boton-principal">Intentar Nuevamente</button>
                    <button className="boton boton-secundario">Volver al Inicio</button>
                </div>
            </div>
        </div>
    );
}

export default pagoCancelado;