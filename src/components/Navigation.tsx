import { FunctionComponent } from "react";
import NavItem from "./NavItem";

interface Props {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  buttonClassName?: string;
  closeMenu?: () => void;
  mobile?: boolean;
}

const Navigation: FunctionComponent<Props> = (props) => {
  const {
    className = "",
    listClassName = "",
    closeMenu = () => {},
    itemClassName = "",
    buttonClassName = "",
    mobile = false,
  } = props;

  return (
    <nav
      aria-label="main navigation"
      className={`flex flex-col md:flex-row items-center justify-between ${className}`}
    >
      <ul
        className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${listClassName}`}
      >
        {["Home", "About", "Features", "Media", "Sign Up"].map((item, index) => (
          <NavItem
            key={index}
            title={item}
            path={`#${item.toLowerCase().replace(" ", "-")}`}
            closeMenu={closeMenu}
            className={`text-gray-100 hover:text-gray-900 font-medium transition-all ${itemClassName}`}
          />
        ))}
      </ul>
      <a
        href="#buy-cavon"
        aria-label="Buy cavon"
        className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ${buttonClassName}`}
        onClick={() => {
          closeMenu();
        }}
      >
        Buy now
      </a>
    </nav>
  );
};

export default Navigation;
