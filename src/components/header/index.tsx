import './header.css'

const Header = () => {
    return(
        <header className='header'>
            <img src='./imagens/Logo-branco.png' alt="Logo CodeChella"/>
            <ul>
                <li><a href="#">A experiência</a></li>
                <li><a href="#">Mapa de Setores</a></li>
                <li><a href="#">Informações</a></li>
                <li><a href="#">Ingresso</a></li>
            </ul>
        </header>
    )
}
export default Header