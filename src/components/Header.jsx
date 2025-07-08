import { NavLink } from "react-router-dom";

function Header() {
  return (

    <header className="px-5 py-8 bg-blue-200">
      <img className="h-6" src="/logo.svg" alt="logo" />
      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/cart"}>Cart</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
