import './index.css';
import Banner from './components/banner';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        titulo='Boas-vindas ao CodeChella2023!'
        src='./imagens/Tema Verão/Desktop/Imagens/1 - Banner -Homepage.png' 
        alt='Banner de uma roda gigante'
      />
      <Home />
      <Banner 
        src='./imagens/Tema Verão/Desktop/Imagens/1 - Imagem homepage2.png'
        alt='Banner de várias pessoas dançando'
      />
      <Footer />
    </div>
  );
}

export default App;
