import './ingresso.css'
import { useLocation } from 'react-router-dom';

const Ingresso = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nome = searchParams.get('nome');
  const tipo = searchParams.get('tipo');
  const dia = searchParams.get('dia');

  console.log("2", nome, tipo, dia)

  return (
    <section className="ingresso">
      <h3 className="ingresso_titulo">Uhul, agora sim!
        Seu ingresso está aqui, apresente na entrada do
        evento e divirta-se!</h3>
      <div className="ingresso_container">
        <aside>
          <img className='logo'
            src="./imagens/Logos/Logo cinza.svg"
            alt="Logo Codechella" />
          <img className='simbolo'
            src="./imagens/Logos/Símbolo ingresso.svg"
            alt="Simbolo do Ingresso" />
        </aside>

        <img className='QR'
          src="./imagens/pngs/6 - Qr code.svg"
          alt="QR Code" />
        <h4>{nome}</h4>
        <p>{tipo}</p>
        <p>Dia: {dia}</p>
        <p>Local: Curitiba-PR</p>
      </div>
    </section>
  );
};

export default Ingresso;
