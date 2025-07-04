import { useState } from "react";

const Tooltip = ({
  children,
  content,
  position = "top",
  delay = 0,
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = () => {
    const baseClasses =
      "absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg whitespace-nowrap pointer-events-none";

    switch (position) {
      case "top":
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
      case "bottom":
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-2`;
      case "left":
        return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-2`;
      case "right":
        return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-2`;
      default:
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
    }
  };

  const getArrowClasses = () => {
    const baseArrowClasses = "absolute w-0 h-0 border-solid";

    switch (position) {
      case "top":
        return `${baseArrowClasses} top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900`;
      case "bottom":
        return `${baseArrowClasses} bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900`;
      case "left":
        return `${baseArrowClasses} left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900`;
      case "right":
        return `${baseArrowClasses} right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900`;
      default:
        return `${baseArrowClasses} top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900`;
    }
  };

  return (
    <div
      className="relative inline-block"
      style={style}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div
        className={
          `${getPositionClasses()} transition-all duration-200 ` +
          (isVisible
            ? "opacity-100"
            : "opacity-0 pointer-events-none")
        }
        style={{ transitionDelay: `${delay}ms` }}
      >
        {content}
        <div className={getArrowClasses()}></div>
      </div>
    </div>
  );
};

export default Tooltip;
