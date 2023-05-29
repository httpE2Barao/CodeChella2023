import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className='header'>
            <img src='./imagens/Logo-branco.png' alt="Logo CodeChella"/>
            <ul>
                <li><Link to="/experiencia">A Experiência</Link></li>
                <li><Link to="/setores">Mapa de Setores</Link></li>
                <li><Link to="/informacoes">Informações</Link></li>
                <li><Link to="/ingresso">Ingresso</Link></li>
            </ul>
        </header>
    )
}
export default Header