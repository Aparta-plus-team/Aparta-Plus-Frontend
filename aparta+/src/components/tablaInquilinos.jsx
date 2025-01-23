import "+/tablaInquilinos.component.scss";
import PropTypes from "prop-types";
import { useQuery, gql, useMutation, useApolloClient } from "@apollo/client";

const INMUEBLE_QUERY = gql`
  query ObtenerInmuebleId($inquilinoId: UUID!) {
    facturas(
      where: {
        inmueble: {
          contrato: {
            inquilino: { inquilinoid: { eq: $inquilinoId } }
          }
        }
      }
      order: { fechapago: DESC }
      take: 1
    ) {
      items {
        inmueble {
          inmuebleid
        }
      }
    }
  }
`;

const FACTURA_QUERY = gql`
  query ObtenerFactura($inquilinoId: UUID!) {
    facturas(
      where: {
        inmueble: {
          contrato: {
            inquilino: { inquilinoid: { eq: $inquilinoId } }
          }
        }
      }
      order: { fechapago: DESC }
      take: 1
    ) {
      items {
        estado
        descripcion
        facturaid
        fechapago
        monto
      }
    }
  }
`;

// Mutation para obtener el estado de pago
const PAYMENT_STATUS_MUTATION = gql`
  mutation ObtenerEstadoDePago($inmuebleId: String!) {
    paymentStatus(inmuebleId: $inmuebleId) {
      debtAmount
      debtMonths
      hasDebt
      hasPendingCurrentMonth
      isCurrentMonthPaid
      moraAmount
      willHaveMora
      inmuebleId
    }
  }
`;

const MANUAL_PAYMENT_MUTATION = gql`
  mutation RealizarPagoManual($inmuebleId: String!) {
    manualPayment(input: { inmuebleId: $inmuebleId }) {
      deudaTotal
      message
      success
      inmuebleId
    }
  }
`;


// Componente para mostrar el estado de la factura
const FacturaEstado = ({ inquilinoId }) => {
  const { loading, error, data } = useQuery(FACTURA_QUERY, {
    variables: { inquilinoId },
  });

    // Función para obtener la clase CSS basada en el estado
    const getStatusClass = (status) => {
      if (status === "Pagado") return "status-paid";
    if (status === "No Pagado" || "Pendiente") return "status-late";
    return "status-na"; // Clase CSS para N/A
    };

  if (loading) return <span>Consultando...</span>;
  if (error) return <span>Error al cargar</span>;

const estado = data?.facturas?.items[0]?.estado ?? null;
  
  return (
    <div className={`inquilino-info status ${getStatusClass(estado)}`}>
      <span className="status-badge">
      {estado ?? (estado === true ? "Pagado" : estado === false ? "Atrasado" : "N/A")}
      </span>
    </div>
  );
};

const TablaInquilinos = ({ inquilinos, onPagoConfirmado }) => {
  // Función para manejar el click en el botón de pago
  const client = useApolloClient();
  const handlePagoClick = (inquilino) => {
    const confirmar = window.confirm(`¿Estás seguro que deseas registrar el pago para ${inquilino.nombre}?`);
    
    if (confirmar) {
      // Si existe la función onPagoConfirmado en las props, la llamamos con el inquilino
      if (onPagoConfirmado) {
        onPagoConfirmado(inquilino);
      }
    }
  };

  const [manualPayment] = useMutation(MANUAL_PAYMENT_MUTATION); // Mutación para el pago manual

  const [fetchPaymentStatus] = useMutation(PAYMENT_STATUS_MUTATION, {
    onCompleted: async (data) => {
      const status = data.paymentStatus;
      console.log(status);

      if (!status.hasDebt) {
        alert("El cliente no tiene deudas pendientes.");
      } else {
        const confirmar = window.confirm(
          `El cliente tiene una deuda de ${status.debtAmount} por ${status.debtMonths} mes(es). ¿Deseas registrar el pago manualmente?`
        );

        if (confirmar) {
          const inmuebleId = status.inmuebleId;
          try {
            // Llamar a la mutación de pago manual
            const { data: paymentData } = await manualPayment({
              variables: { inmuebleId },
            });

            if (paymentData.manualPayment.success) {
              alert(
                `Pago realizado con éxito. Deuda total: ${paymentData.manualPayment.deudaTotal}`
              );
            } else {
              alert(
                `Error al realizar el pago: ${paymentData.manualPayment.message}`
              );
            }
          } catch (error) {
            alert("Ocurrió un error al realizar el pago manual.");
            console.error(error);
          }
        }
      }
    },
    onError: (error) => {
      alert("Ocurrió un error al consultar el estado de pago.");
      console.error(error);
    },
  });


  const handleEstadoDePagoClick = (inquilinoId) => {
    client
      .query({
        query: INMUEBLE_QUERY,
        variables: { inquilinoId },
      })
      .then(({ data }) => {
        const inmuebleId = data?.facturas?.items[0]?.inmueble?.inmuebleid;
        if (inmuebleId) {
          fetchPaymentStatus({
            variables: { inmuebleId },
          });
        } else {
          alert("No se encontró un inmueble asociado a este inquilino.");
        }
      })
      .catch((error) => {
        alert("Error al obtener el inmueble asociado.");
        console.error(error);
      });
  };



  return (
    <div className="inquilino-list">
      {inquilinos.map((inquilino, index) => (
        <div key={index} className="inquilino-row">
          <div className="inquilino-info name">{inquilino.nombre}</div>
          <div className="inquilino-info email">{inquilino.correo}</div>
          <div className="inquilino-info phone">{inquilino.telefono}</div>
          <FacturaEstado inquilinoId={inquilino.id} />
          <div className="inquilino-info actions">
            <a href={`/editarinquilino/${inquilino.id}`}>
              <button className="edit-button mx-2">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  fill="none"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </a>
            <button 
              className="edit-button mx-2"
              onClick={() => handleEstadoDePagoClick(inquilino.id)}
            >
              <span className="material-symbols-outlined">attach_money</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

TablaInquilinos.propTypes = {
  inquilinos: PropTypes.array,
  onPagoConfirmado: PropTypes.func,
};

export default TablaInquilinos;