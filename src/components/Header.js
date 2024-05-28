import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div>
      <nav style={{display: 'flex', justifyContent: 'space-around'}}>
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/about'>About</Link></p>
        <p><Link to='/contact'>Contact</Link></p>
        <p><Link to='/carts'>Carts</Link></p>

      </nav>
    </div>
    );
}

export default Header;