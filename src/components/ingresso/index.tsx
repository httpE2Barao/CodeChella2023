import './ingresso.css'

export interface ingresso {
 nome?: string | undefined
 tipo?: string | undefined
 dia?: string | undefined
}

const Ingresso = (props: ingresso) => {
  console.log(props)
  console.log('3', props.nome, props.tipo, props.dia)

  return (
    <section className="ingresso">
      <h3 className="ingresso_titulo">Uhul, agora sim!
        Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h3>
      <div className="ingresso_container">
        <aside>
          <img className='logo' src="./imagens/Logos/Logo cinza.svg" alt="Logo Codechella" />
          <img className='simbolo' src="./imagens/Logos/Símbolo ingresso.svg" alt="Simbolo do Ingresso" />
        </aside>

        <img className='QR' src="./imagens/pngs/6 - Qr code.svg" alt="QR Code" />

        <h4>{props.nome} Exemplo de Nome</h4>
        <p>{props.tipo}Tipo: Pista Premium</p>
        <p>Dia: {props.dia} 12/03 - SÁBADO</p>
        <p>Local: Curitiba-PR</p>
      </div>
    </section>
  )
}
export default Ingresso;