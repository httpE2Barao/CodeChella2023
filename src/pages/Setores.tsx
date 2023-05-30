import Banner from "../components/banner";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";

const Setores = () => {
  return (
    <>
      <Header />
      <Banner
        titulo="Mapa de Setores"
        src="./imagens/Tema Verão/Desktop/Imagens/3 - Banner - Mapa de setores.png"
        alt="Imagem do local"
      />
      <Content 
        setores= {true}

        titulo="Pista"
        src="./imagens/Tema Verão/Desktop/Imagens/3 - Mapa de setores2.png"
        alt="Imagem de pessoas de pé e algumas sentadas conversando"
        text="Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."

        titulo1="Pista Premium"
        src1="./imagens/Tema Verão/Desktop/Imagens/3 - Mapa de setores3.png"
        alt1="Imagem de pessoas de pé com fumaças coloridas e o palco atrás "
        text1="Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."

        titulo2="Cadeiras"
        src2="./imagens/Tema Verão/Desktop/Imagens/3 - Mapa de setores3.png"
        alt2="Imagem de cadeiras dobradas estilo 'estágio de futebol'"
        text2="Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."
      />
      <Footer />
    </>
  )
}
export default Setores;