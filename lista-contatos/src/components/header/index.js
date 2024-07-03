
import { Link,useLocation } from 'react-router-dom';
import './style.css';

function Header(){
  return(
    <header>
      <h2>Leste Telecom</h2>

      <div>
        <Link style={{fontWeight:useLocation().pathname==='/'?1000:100}} to="/">Contact List</Link>
        <Link style={{fontWeight:useLocation().pathname==='/analise'?1000:100}} to="/analise">Contact Analysis</Link>
      </div>
    </header>
  )
}

export default Header;