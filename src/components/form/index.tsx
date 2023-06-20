import React, { useContext, useState } from 'react';
import './form.css';
import { IngressoContext } from '../ingresso/ingresso_provider';

const Formulario = () => {
  const [data, setData] = useState('Void');
  const { setIngressoData } = useContext(IngressoContext);

  const pegarInfo = () => {
    const setterNome = document.querySelector<HTMLInputElement>('#nome')?.value;
    const setterData = document.querySelector<HTMLInputElement>('#data')?.value;
    const setterTipo = document.querySelector<HTMLSelectElement>('#tipo')?.value;
    const setterDia = document.querySelector<HTMLSelectElement>('#dia')?.value;

    setIngressoData(setterNome ?? 'Não encontrado', setterTipo ?? 'Não encontrado', setterDia ?? 'Não encontrado');

    setData(setterData ?? 'Não encontrado');
  };

  const Validacao = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data !== 'Void') {
      const nascimento = new Date(data);
      const idade = Math.floor((Date.now() - nascimento.getTime()) / (31557600000));
      if (idade < 16) {
        alert('Você deve ser maior que 16 anos.');
      } else if (idade > 100) {
        alert('Idade Inválida!');
      }
      window.location.href = '/ingresso-resumo'; // Redireciona para a página de resumo do ingresso
    }
  };

  return (
    <section className="formulario">
      <h2 className="formulario_titulo">Preencha o formulário a seguir:</h2>
      <form className="formulario_flex" onSubmit={Validacao} onChange={pegarInfo}>
        <label htmlFor="nome" className="formulario_label">Nome Completo:</label>
        <input type="text" id="nome" required />

        <label htmlFor="email" className="formulario_label">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="tipo" className="formulario_label">Tipo do Ingresso:</label>
        <select id="tipo" required>
          <option value=""></option>
          <option value="Pista Comum">Pista Comum</option>
          <option value="Pista Premium">Pista Premium</option>
          <option value="Cadeiras Térreo">Cadeiras Térreo</option>
          <option value="Cadeiras Superiores">Cadeiras Superiores</option>
        </select>

        <label htmlFor="dia" className="formulario_label">Dia:</label>
        <select id="dia" required>
          <option value=""></option>
          <option value="Sábado">Sábado - 11/03</option>
          <option value="Domingo">Domingo - 12/03</option>
        </select>

        <label htmlFor="data" className="formulario_label">Data de Nascimento:</label>
        <input type="date" id="data" required />

        <input className="botao" type="submit" value="Avançar!" />
      </form>
    </section>
  );
};

export default Formulario;
