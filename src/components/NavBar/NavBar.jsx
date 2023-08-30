import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                {/* Brand */}
                <h1>
                    <Link to="/">MercadoCoder</Link>
                </h1>
                
                 {/* Links */}
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                       <NavLink to="/category/phones">Teléfonos</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/category/tablets">Tablets</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink to="/category/notebooks">Notebooks</NavLink>
                    </li>
                </ul>
                
                {/* CartWidget */}                
                <CartWidget/>
            </div>
        </nav>
    )
}

export default Navbar;
