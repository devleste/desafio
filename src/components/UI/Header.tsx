import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo";

function Header() {
  const navigate = useNavigate();

  return (
    <nav className="h-20 w-full shadow-sm bg-white transition-all flex-shrink-0 border-b-2">
      <div className="h-full w-full p-wrap flex items-center gap-12 text-charcoal-green">
        <button onClick={() => navigate("/contacts/")} className="h-16 w-16">
          <Logo className="w-full h-full text-charcoal-green hover:text-primary" />
        </button>
        <div className="flex h-full items-center">
          <NavLink
            to={"/contacts/"}
            className="header-link font-bold text-sm hover:bg-gray-200 h-[82px] flex items-center justify-center px-3 cursor-pointer"
          >
            <span className="">Contatos</span>
          </NavLink>
          <NavLink
            to={"/insights/"}
            className="header-link font-bold text-sm hover:bg-gray-200 h-[82px] flex items-center justify-center px-3 cursor-pointer"
          >
            <span className="">Insights</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Header;
