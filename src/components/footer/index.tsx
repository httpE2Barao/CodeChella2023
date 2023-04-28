import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo'>
                <img src="./imagens/Tema Verão/Desktop/Logos/Logo cinza.svg" alt="Logo CodeChella" />
                <div>
                    <p>Acesse as nossas contas:</p>
                    <img src="./imagens/Tema Verão/Desktop/Ícones/svgs/Ícone whatsapp.svg" alt="Ícone Whatsapp" />
                    <img src="./imagens/Tema Verão/Desktop/Ícones/svgs/Ícone Twitch.svg" alt="Ícone Twitch" />
                    <img src="./imagens/Tema Verão/Desktop/Ícones/svgs/Ícone instagram.svg" alt="Ícone Instagram" />
                </div>
            </div>
            <div className='aside'>
                <p>Desenvolvido por <a target='blank' href="https://github.com/httpE2Barao"> 
                    Elias Barão.</a><br/>
                    Projeto fictício sem fins comerciais.
                </p>
            </div>
        </div>
    )
}

export default Footer