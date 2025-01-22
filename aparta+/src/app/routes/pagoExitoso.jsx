import React from "react";
import "+/pagoExitoso.scss";

const PagoExitoso = () => {
    return (
        <div class='body'>
            <div class="confirmation-card">
                <div class="success-icon"></div>
                <h1 class="title">¡Pago Exitoso!</h1>
                <p class="message">Tu pago ha sido procesado correctamente.</p>
                
                <div class="details">
                    <p>Monto pagado:</p>
                    <div class="amount">$149.99</div>
                    <p class="transaction-id">ID de Transacción: #123456789</p>
                </div>

                <button class="button">Volver al Inicio</button>
            </div>
        </div>
    );
}

export default PagoExitoso;