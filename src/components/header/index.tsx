import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to="/">
                <img src='./imagens/Logo-branco.png' alt="Logo CodeChella" />
            </Link>

            <input type="checkbox" name="menu" id="menu" />
            <label htmlFor="menu">
                <img className='menu_botao' src="./imagens/Tema Verão/Desktop/Ícones/svgs/menu.svg" alt="menu" />
            </label>

            <ul className='menu'>
                <li><Link to="/experiencia">A Experiência</Link></li>
                <li><Link to="/setores">Mapa de Setores</Link></li>
                <li><Link to="/informacoes">Informações</Link></li>
                <li><Link to="/ingresso">Ingresso</Link></li>
            </ul>
        </header>
    )
}
export default Header