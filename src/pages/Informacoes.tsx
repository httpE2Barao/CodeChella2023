import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Pergunta from "../components/questions";


const Informacoes = () => {
  return (
    <>
      <Header />
      <Banner
        titulo="Informações"
        src="./imagens/Tema Verão/Desktop/Imagens/4 - Banner - infos gerais.png"
        alt="Imagem de um show com pessoas com as mãos pra cima"
      />
      <section className="perguntas">
        <h2 className="perguntas_titulo">Perguntas Frequentes:</h2>
        <Pergunta
          pergunta="Quais serão as atrações?"
          resposta="Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!"
        />
        <Pergunta
          pergunta="Qual é a classificação etária?"
          resposta="A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar."
        />
        <Pergunta
          pergunta="Qual são os setores disponíveis?"
          resposta="Pista Premium, Pista Comum, Cadeiras térreo, Cadeiras superiores e
        Rampas."
        />
        <Pergunta
          pergunta="Qual são os itens proibidos?"
          resposta="Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares."
        />
        <Pergunta
          pergunta="Tenho direito a meia-entrada?"
          resposta="De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios."
        />
      </section>
      <Footer />
    </>
  )
}
export default Informacoes;