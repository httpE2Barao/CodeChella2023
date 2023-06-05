export interface ingresso {
 nome: string | undefined
 tipo: string | undefined
 dia: string | undefined
}

const Ingresso = (props:ingresso) => {
  return (
    <section className="ingresso">
      <h4 className="ingresso_titulo">Uhul, agora sim!
        Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h4>
      <div className="ingresso_container">
        <aside>
          <img src="" alt="" />
          <img src="" alt="" />
        </aside>

        <img src="" alt="" />

        <h4>{props.nome}</h4>
        <p>{props.tipo}</p>
        <p>Data: {props.dia}</p>
        <p>Local: Curitiba-PR</p>
      </div>
    </section>
  )
}
export default Ingresso;