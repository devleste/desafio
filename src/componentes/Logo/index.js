import './Logo.css'
import Imagem from './img/logo.png'

function Logo(){
    return(
    
        <div className="titulo">
            <img src={Imagem} alt='Logo da Leste' title='Logo da Leste' />
        </div>
    )
}

export default Logo