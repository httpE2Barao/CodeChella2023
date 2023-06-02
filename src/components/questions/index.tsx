import { useState } from 'react'
import './questions.css'

interface perguntas {
  pergunta: string,
  resposta: string,
}

const Pergunta = (props: perguntas) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="perguntas_flex">
      <div className="perguntas_container">
        <div className='container_pergunta' onClick={() => setOpen(!open)}>
          <h3>{props.pergunta}</h3>
          <img src="./imagens/Tema Verão/Desktop/Ícones/svgs/arrow_drop_down.svg" alt="" />
        </div>
        { open ?
          <div className='container_resposta'><p>{props.resposta}</p></div>
         : ''}
      </div>
    </article>
  )
}
export default Pergunta;