import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Ingresso, { ingresso } from "../components/ingresso";

const IngressoResultado = () => {
  return (
    <>
      <Header />
      <Banner
        titulo="Seu ingresso está aqui!"
        src="./imagens/pngs/6 - Banner - seu ingresso está aqui.png"
        alt="Imagem de pessoas comemorando"
      />

      {/* { console.log('2', props.nome, props.tipo, props.dia) } */}

      {/* <Ingresso 

      > */}
      <Footer />
    </>
  )
}
export default IngressoResultado;