import './header.css'

const Header = () => {
    return(
        <header className='header'>
            <img src='./imagens/Logo-branco.png' alt="Logo CodeChella"/>
            <ul>
                <li>A experiência</li>
                <li>Mapa de Setores</li>
                <li>Informações</li>
                <li>Ingresso</li>
            </ul>
        </header>
    )
}
export default Header