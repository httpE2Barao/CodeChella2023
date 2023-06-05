import Banner from "../components/banner";
import Header from "../components/header";
import Ingresso, { ingresso } from "../components/ingresso";

const IngressoResultado = (props: any) => {
  return (
    <>
      <Header />
      <Banner
        titulo="Seu ingresso está aqui!"
        src="./imagens/Tema Verão/Desktop/Imagens/6 - Banner - seu ingresso está aqui.png"
        alt="Imagem de pessoas comemorando"
      />

      { console.log('2', props.nome, props.tipo, props.dia) }

      <Ingresso 
        nome={props.nome}
        tipo={props.tipo}
        dia={props.dia}
      />
    </>
  )
}
export default IngressoResultado;