import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import MouseIcon from "@mui/icons-material/Mouse";
import CartWidget from "../CartWidget/CartWidget";

function navbar() {
  let activeStyle = {
    color: "#e63946",
    textDecoration: "none",
  };

  let noActiveStyle = {
    textDecoration: "none",
    color: "#f1faee",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        <div className={styles.logo}>
          <MouseIcon
            sx={{
              color: "#f1faee",
            }}
          />
          Mouseland
        </div>
      </NavLink>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/categorias/1"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Retros
      </NavLink>
      <NavLink
        to="/categorias/2"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Gamers
      </NavLink>
      <NavLink
        to="/categorias/3"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Opticos
      </NavLink>
      <NavLink
        to="/categorias/4"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Inalambricos
      </NavLink>
      <NavLink
        to="/categorias/5"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        Recargables
      </NavLink>
      <NavLink
        to="cart"
        style={({ isActive }) => (isActive ? activeStyle : noActiveStyle)}
      >
        <CartWidget />
      </NavLink>
    </nav>
  );
}

export default navbar;
