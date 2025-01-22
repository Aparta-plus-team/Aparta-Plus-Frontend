import React from "react";
import "+/pagoCancelado.scss";

const pagoCancelado = () => {
    return (
        <div class='body-pago-cancel'>
            <div class="tarjeta-pago">
                <div class="icono-error"></div>
                <h1 class="titulo">Pago Cancelado</h1>
                <p class="mensaje">Lo sentimos, tu pago no pudo ser procesado.</p>
                
                <div class="detalles">
                    <p class="detalles-error">Motivo: Transacción cancelada por el usuario</p>
                    <p class="numero-transaccion">ID de Transacción: #123456789</p>
                </div>

                <div class="contenedor-botones">
                    <button class="boton boton-principal">Intentar Nuevamente</button>
                    <button class="boton boton-secundario">Volver al Inicio</button>
                </div>
            </div>
        </div>
    );
}

export default pagoCancelado;