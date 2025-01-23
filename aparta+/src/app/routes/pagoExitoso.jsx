import "+/pagoExitoso.scss";

const PagoExitoso = () => {
  return (
    <div className="body">
      <div className="confirmation-card">
        <div className="success-icon"></div>
        <h1 className="title">¡Pago Exitoso!</h1>
        <p className="message">Tu pago ha sido procesado correctamente.</p>

        <div className="details">
          <p>Monto pagado:</p>
          <div className="amount">$149.99</div>
          <p className="transaction-id">ID de Transacción: #123456789</p>
        </div>
        <a href="/dashboard">
          <button className="button">Volver al Inicio</button>
        </a>
      </div>
    </div>
  );
};

export default PagoExitoso;
