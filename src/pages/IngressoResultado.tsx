import React from 'react';
import Header from '../components/header';
import Banner from '../components/banner';
import Ingresso from '../components/ingresso';
import Footer from '../components/footer';
import IngressoProvider from '../components/ingresso/ingresso_provider';

const IngressoResultado = () => {
  return (
    <>
      <Header />
      <Banner
        titulo="Seu ingresso está aqui!"
        src="./imagens/pngs/6 - Banner - seu ingresso está aqui.png"
        alt="Imagem de pessoas comemorando"
      />
      <IngressoProvider>
        <Ingresso />
      </IngressoProvider>
      <Footer />
    </>
  );
};

export default IngressoResultado;
