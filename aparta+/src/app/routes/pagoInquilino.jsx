
import '+/pagoInquilino.scss';
import PropertyCard from "*/propertyCard";

const PagoInquilino = () => {
  const handlePayment = () => {
    // Handle payment logic here
    console.log('Processing payment...');
  };

  return (
    <div className="rent-payment">
      <div className="rent-payment__container">
        <h1 className="rent-payment__title">¡Hola, INQUILINO!</h1>
        
        <div className="rent-payment__amount-section">
          <p className="rent-payment__subtitle">Tu alquiler a pagar es de:</p>
          <h2 className="rent-payment__amount">RD$8,500</h2>
          <p className="rent-payment__late-fee">
            * Se aplica está aplicando una mora 15% del alquiler por retraso en el pago
          </p>
        </div>

        <div className="property__properties">
          {[1].map((_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>

        <div className="rent-payment__payment-period pl-1">
          <p className="rent-payment__period-title">
            Pagar meses por adelantado:
          </p>
          <p className="rent-payment__period-dates">
            Diciembre 2024 - Marzo 2025
          </p>
        </div>

        <button 
          className="rent-payment__submit-button"
          onClick={handlePayment}
        >
          Proceder a pagar
        </button>
      </div>
    </div>
  );
};

export default PagoInquilino;