import "+/searchbar.component.scss";
import Search from "&/search.svg";
function Searchbar () {
  return (
    <div className="search-bar">
      <img src={Search} alt="Buscar" className="search-bar__icon" />
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar Propiedad"
      />
    </div>
  )
    
}

export default Searchbar;