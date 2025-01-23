import PropTypes from "prop-types";

export default function Button({ text, onClick, color, width }) {
  switch (color) {
    case "blue":
      color = "#094152";
      break;
    case "red":
      color = "#F72C25";
      break;
    case "green":
      color = "#98B600";
      break;
    default:
      color = "transparent";
      break;
  }

  return (
    <button
      className="rounded-md h-10 text-white hover:opacity-90 transition-shadow"
      onClick={onClick}
      style={{ width: width, backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  width: PropTypes.string,
};
