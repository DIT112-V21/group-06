import { Link } from "react-router-dom";
import '../Css/Nav.css';

function Nav() {


  return (
    <nav className="Nav">
      
      <ul className="nav-links">
        <Link to='/carControl'>
          <li>Car Controll</li>
        </Link>
        <Link to='/OrderInterface'>
          <li id='shop-li'>Order food</li>
        </Link>
        <Link to='/CustomOrders'>
          <li>Custom orders</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;