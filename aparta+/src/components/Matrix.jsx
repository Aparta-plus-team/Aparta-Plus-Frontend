import '+/Matrix.component.scss';

const Matrix = () => {
return (
  <section className="matrix-container">
    <header className="matrix-header">
        <h1 className='matrix-title'>Estadisticas</h1>
        <div className="matrix-select">    
          <select className='select-box' name="Años"> 
            <option value="">Año</option> 
            <option value="Año1">2025</option> 
            <option value="Año2">2024</option> 
            <option value="Año3">2023</option> 
            <option value="Año4">2022</option> 
          </select> 
        </div>
    </header>
    <article className="matrix-content">
      <ul className="matrix-months">
        <li className='month'>Enero<br/><div className='matrix-state-pagado'><p>Pagado</p></div></li>
        <li className='month'>Febrero<br/><div className='matrix-state-desocupado'><p>Desocupado</p></div></li>
        <li className='month'>Marzo<br/><div className='matrix-state-adelantado'><p>Adelantado</p></div></li>
        <li className='month'>Abril<br/><div className='matrix-state-pagado'><p>Pagado</p></div></li>
        <li className='month'>Mayo<br/><div className='matrix-state-desocupado'><p>Desocupado</p></div></li>
        <li className='month'>Junio<br/><div className='matrix-state-adelantado'><p>Adelantado</p></div></li>
        <li className='month'>Julio<br/><div className='matrix-state-pagado'><p>Pagado</p></div></li>
        <li className='month'>Agosto<br/><div className='matrix-state-desocupado'><p>Desocupado</p></div></li>
        <li className='month'>Septiembre<br/><div className='matrix-state-adelantado'><p>Adelantado</p></div></li>
        <li className='month'>Octubre<br/><div className='matrix-state-pagado'><p>Pagado</p></div></li>
        <li className='month'>Noviembre<br/><div className='matrix-state-desocupado'><p>Desocupado</p></div></li>
        <li className='month'>Diciembre<br/><div className='matrix-state-adelantado'><p>Adelantado</p></div></li>
      </ul>
    </article>
  </section>
);
}
export default Matrix;

