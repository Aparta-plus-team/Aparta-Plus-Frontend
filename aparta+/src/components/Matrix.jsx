import '+/Matrix.component.scss';

const Matrix = () => {
return (
  <section className="matrix-container">
    <header className="matrix-header">
        <h1 className='matrix-title'>Estadisticas</h1>
        <div className="matrix-select">    
          <label for="Años">Año</label> 
          <select id="Años" name="Años"> 
            <option value="Año1">2025</option> 
            <option value="Año2">2024</option> 
            <option value="Año3">2023</option> 
            <option value="Año4">2022</option> 
          </select> 
        </div>
    </header>
    <article className="matrix-content">
      <ul className="matrix-months">
        <li className='month'>Enero<br/></li>
        <li className='month'>Febrero<br/></li>
        <li className='month'>Marzo<br/></li>
        <li className='month'>Abril<br/><p className='matrix-state'>Pagado</p></li>
        <li className='month'>Mayo<br/></li>
        <li className='month'>Junio<br/></li>
        <li className='month'>Julio<br/></li>
        <li className='month'>Agosto<br/></li>
        <li className='month'>Septiembre<br/></li>
        <li className='month'>Octubre<br/></li>
        <li className='month'>Noviembre<br/></li>
        <li className='month'>Diciembre<br/></li>
      </ul>
    </article>
  </section>
);
}
export default Matrix;

