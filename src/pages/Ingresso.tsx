import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../components/banner";
import Formulario from "../components/form";

const Ingresso = () => {
  return (
    <>
      <Header />
      <Banner 
        titulo="Garanta seu Ingresso!"
        src="./imagens/Tema Verão/Desktop/Imagens/5 - Banner - garanta seu ingresso.png"
        alt="Imagem de comemoração com vários objetos de malabarismo no ar"
      />
      <Formulario />
      <Footer />
    </>
  )
}
export default Ingresso;