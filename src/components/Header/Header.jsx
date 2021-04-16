import HeaderStyles from "./HeaderStyle"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <HeaderStyles>
            <Link to="/menu">
            <img alt="menu" src="13590446331543238903.svg"/>
            </Link>
            Leste Contact
        </HeaderStyles>
    )
}

export default Header;