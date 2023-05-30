import Banner from '../components/banner';
import Header from '../components/header';
import Info from '../components/info';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        titulo='Boas-vindas ao CodeChella2023!'
        src='./imagens/Tema Verão/Desktop/Imagens/1 - Banner -Homepage.png'
        alt='Banner de uma roda gigante'
      />
      <Info />
      <Banner
        src='./imagens/Tema Verão/Desktop/Imagens/1 - Imagem homepage2.png'
        alt='Banner de várias pessoas dançando'
      />
      <Footer />
    </>
  );
}

export default Home;