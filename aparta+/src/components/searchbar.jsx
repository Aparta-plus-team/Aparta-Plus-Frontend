import PropTypes from "prop-types"; // Importamos PropTypes para la validación de props
import "+/searchbar.component.scss";
import Search from "&/search.svg";

function Searchbar({ placeholder }) {
  return (
    <div className="search-bar">
      <img src={Search} alt="Buscar" className="search-bar__icon" />
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder} 
      />
    </div>
  );
}

Searchbar.propTypes = {
  placeholder: PropTypes.string,
};


Searchbar.defaultProps = {
  placeholder: "Buscar...",
};

export default Searchbar;
