import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DropdownItem = ({
  tag = "button",
  to,
  onClick,
  onItemClick,
  baseClassName = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  className = "",
  children,
}) => {
  const combinedClasses = `${baseClassName} ${className}`.trim();

  const handleClick = (event) => {
    if (tag === "button") {
      event.preventDefault();
    }
    if (onClick) onClick();
    if (onItemClick) onItemClick();
  };

  if (tag === "a" && to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={handleClick} className={combinedClasses}>
      {children}
    </button>
  );
};

DropdownItem.propTypes = {
  tag: PropTypes.oneOf(["a", "button"]),
  to: PropTypes.string,
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
  baseClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DropdownItem;
