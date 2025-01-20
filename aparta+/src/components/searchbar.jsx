
import PropTypes from "prop-types"; 
import "+/searchbar.component.scss";
import Search from "&/search.svg";

function Searchbar({ placeholder, onSearch }) {
  return (
    <div className="search-bar">
      <img src={Search} alt="Buscar" className="search-bar__icon" />
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)} // Llama a onSearch para actualizar el estado
      />
    </div>
  );
}

Searchbar.propTypes = {
  placeholder: PropTypes.string, // Haciendo placeholder opcional
  onSearch: PropTypes.func.isRequired, // Validación de la función onSearch
};

export default Searchbar;

