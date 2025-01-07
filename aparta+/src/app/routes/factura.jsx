import React from 'react'
import '+/factura.scss'


export default function factura() {


  return (
    <div className="invoice-container">

    <header className="invoice-header">
        <h1 className='text-3xl font-bold' >Factura de Pago</h1>
        <p>Gracias por su pago.</p>
    </header>
    <section className="invoice-info">
        <div>
            <h2>Información del Cliente</h2>
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Correo:</strong> juan.perez@example.com</p>
        </div>
        <div>
            <h2>Información de la Factura</h2>
            <p><strong>Número de Factura:</strong> #12345</p>
            <p><strong>Fecha:</strong> 06/01/2025</p>
        </div>
    </section>
    <table className="invoice-table">
        <thead>
            <tr>
                <th>Apartamento</th>
                <th>Periodo</th>
                <th>Estado</th>
                <th>Renta</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowSpan="3" >B4</td>
                <td>Enero</td>
                <td>Atrasado</td>
                <td>$30,000.00</td>
                <td>30,000.00</td>
            </tr>
            <tr>
                <td>Febrero</td>
                <td>Actual</td>
                <td>$30,000.00</td>
                <td>$60,000.00</td>
            </tr>
            <tr>
                <td>Marzo</td>
                <td>Adelantado</td>
                <td>$30,000.00</td>
                <td>$90,000.00</td>
            </tr>

        </tbody>
        <tfoot>
            <tr>
                <td colspan="4"><strong>Total:</strong></td>
                <td><strong>$90,000.00</strong></td>
            </tr>
        </tfoot>
    </table>
    <footer className="invoice-footer">
        <p>Si tiene alguna pregunta, no dude en contactarnos: soporte@example.com</p>
        <p>© 2025 Aparta+. Todos los derechos reservados.</p>
    </footer>
</div>
  )
}
