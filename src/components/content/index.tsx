import '../info/info.css'

interface content {
  setores?: boolean,

  titulo: string,
  src: string,
  alt: string,
  text: string,

  titulo1: string,
  src1: string,
  alt1: string,
  text1: string,

  titulo2: string,
  src2: string,
  alt2: string,
  text2: string,
}

const Content = (Content: content) => {
  return (
    <section className="info">

      {Content.setores == true ?
        <article className="setores_mapa">
          <img src="./imagens/pngs/3 - Mapa setores1.png" alt="Mapa dos setores: Palco, Pista premium, Pista comum e alguns lugares com acessibilidade" />
          <div className="setores_lista">
            <h3>Legenda:</h3>
            <ul>
              <li><div className="quadrado azul"></div>Pista Premium</li>
              <li><div className="quadrado roza"></div>Pista Comum</li>
              <li><div className="quadrado verde"></div>Cadeiras térreo</li>
              <li><div className="quadrado roxo"></div>Cadeiras superiores</li>
              <li><div className="quadrado azul"></div>Rampas</li>
            </ul>
          </div>
        </article> : ''}

      <article className='invertido'>
        <img className='imgPrincipal' src={Content.src} alt={Content.alt} />
        <div>
          <h3>{Content.titulo}</h3>
          <p>{Content.text}</p>
        </div>
      </article>

      <article>
        <img className='imgPrincipal' src={Content.src1} alt={Content.alt1} />
        <div>
          <h3>{Content.titulo1}</h3>
          <p>{Content.text1}</p>
        </div>
      </article>

      <article className='invertido'>
        <img className='imgPrincipal' src={Content.src2} alt={Content.alt2} />
        <div>
          <h3>{Content.titulo2}</h3>
          <p>{Content.text2}</p>
        </div>
      </article>
    </section>
  )
}
export default Content;