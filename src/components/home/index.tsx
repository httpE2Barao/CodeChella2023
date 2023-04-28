import Button from '../button'
import Shows from '../shows'
import './home.css'

const Home = () => {
    return (
        <section className='home'>
            <article>
                <img 
                    className='imgPrincipal'
                    src='./imagens/Tema Verão/Desktop/Imagens/1 - Imagem homepage1.png' alt='Imagem de várias pessoas cantando'
                />
                <div>
                    <h3>&lt; 11 e 12 de Março &gt; <br /> Aluródromo de São Paulo</h3>
                    <p>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
                    <Button 
                        nome='Ver ingressos!'
                        src='./imagens/Tema Verão/Desktop/Ícones/pngs/ícone ingresso.png'
                        />
                </div>
            </article>

            <Shows />

        </section>
    )
}
export default Home