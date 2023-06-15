import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Ingresso, { ingresso } from "../components/ingresso";

const IngressoResultado = (props: any) => {
  return (
    <>
      <Header />
      <Banner
        titulo="Seu ingresso está aqui!"
        src="./imagens/pngs/6 - Banner - seu ingresso está aqui.png"
        alt="Imagem de pessoas comemorando"
      />

      {/* { console.log('Resultado', props.nome, props.tipo, props.dia) } */}

      <Ingresso
        nome="Eu mesmo pq?"
        dia="Nunca"
        tipo="Cadeiras Vuadoras"
      /> 
      <Footer />
    </>
  )
}
export default IngressoResultado;