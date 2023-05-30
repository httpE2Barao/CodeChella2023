import Banner from "../components/banner";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";

const Experiencia = () => {
  return (
    <>
      <Header />
      <Banner 
        titulo="A Experiência"
        src="./imagens/Tema Verão/Desktop/Imagens/2 - Banner - A Experiência.png"
        alt="Imagem de pessoas dançando uma música"
      />
      <Content 
        titulo="Acessibilidade e Inclusão"
        src="./imagens/Tema Verão/Desktop/Imagens/2 - A experiência1.png"
        alt="Foto de uma mulher comemorando sua inclusão"
        text="Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"

        titulo1="Sustentabilidade"
        src1="./imagens/Tema Verão/Desktop/Imagens/2 - A experiência2.png"
        alt1="Foto de uma sacola com itens para reciclagem"
        text1="Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."

        titulo2="Atrações"
        src2="./imagens/Tema Verão/Desktop/Imagens/2 - A experiência3.png"
        alt2="Foto de uma roda gigante"
        text2="Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"
      />
      <Footer />
    </>
  )
}

export default Experiencia;