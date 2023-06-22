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
        src="./imagens/pngs/2 - Banner - A Experiencia.png"
        alt="Imagem de pessoas dançando uma música"
      />
      <Content 
        titulo="Atrações"
        src="./imagens/pngs/2 - A Experiencia3.png"
        alt="Foto de uma roda gigante"
        text="Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"

        titulo1="Acessibilidade e Inclusão"
        src1="./imagens/pngs/2 - A experiencia1.png"
        alt1="Foto de uma mulher comemorando sua inclusão"
        text1="Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"

        titulo2="Sustentabilidade"
        src2="./imagens/pngs/2 - A Experiencia2.png"
        alt2="Foto de uma sacola com itens para reciclagem"
        text2="Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."
      />
      <Footer />
    </>
  )
}

export default Experiencia;