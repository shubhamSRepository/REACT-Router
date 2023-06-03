import { Link, Outlet, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">

        {/* using 'Link' tag and 'ABSOLUTE' path  */}
        {/* <Link to="/">
          <h4>HOME</h4>
        </Link>

        <Link to="/about">
          <h4>ABOUT</h4>
        </Link>

        <Link to="/items">
          <h4>ITEMS</h4>
        </Link> */}
        
        
        {/* using  'RELATIVE' path  */}
        {/* <Link to="/root">
          <h4>HOME</h4>
        </Link>

        <Link to="about">
          <h4>ABOUT</h4>
        </Link>

        <Link to="items">
          <h4>ITEMS</h4>
        </Link> */}


        {/* we can use 'onHover', etc. in css to highlight our 'home', 'about', etc.
        but React-router provides us 'NavLink' to do so*/}
        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/">
          <h4>HOME</h4>
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/about">
          <h4>ABOUT</h4>
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
          to="/items">
          <h4>ITEMS</h4>
        </NavLink>


      </div>

      <Outlet />

    </>
  );
}

export default Navbar;
