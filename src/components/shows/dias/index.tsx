interface DiasProps {
    titulo: string
    linha1: string
    linha2: string
    linha3: string
    linha4: string
}

const Dias = ( props: DiasProps ) => {
    return (
        <section className='dia'>
            <div className='conteiner'>
                <div className='line'></div>
                <h2 className='titulo'> {props.titulo} </h2>
                <div className='line'></div>
            </div>
            <div className="bandas">
                <h3>{props.linha1}</h3>
                <h4>{props.linha2}</h4>
                <h5>{props.linha3}</h5>
                <h6>{props.linha4}</h6>
            </div>
        </section>
    )
}

export default Dias