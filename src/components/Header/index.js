import './header.css'
import Logo from '../../assets/logo.png';

export default function Header(){
    return(
        <div>
            <header>
                <img src={Logo} alt='Logo Leste Telecom' className='logo'/>
            </header> 
        </div>
    )
}
