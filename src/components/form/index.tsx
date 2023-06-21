import './form.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IngressoForm = () => {
  const [setterData, setSetterData] = useState('');
  const navigate = useNavigate();

  const pegarInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const setterNome = form.elements.namedItem('nome') as HTMLInputElement | null;
    const setterTipo = form.elements.namedItem('tipo') as HTMLSelectElement | null;
    const setterDia = form.elements.namedItem('dia') as HTMLSelectElement | null;
    const setterData = form.elements.namedItem('data') as HTMLInputElement | null;

    if (setterNome && setterTipo && setterDia && setterData) {
      console.log('1', setterNome.value, setterDia.value, setterTipo.value);

      setSetterData(setterData.value || '');

      Validacao(setterNome.value, setterData.value, setterDia.value, setterTipo.value);
    }
  };

  const Validacao = (nome: string, data: string, dia: string, tipo: string) => {
    if (data) {
      const nascimento = new Date(data);
      const idade = Math.floor((Date.now() - nascimento.getTime()) / (31557600000));
      if (idade < 16) {
        alert('Você deve ser maior que 16 anos.');
      } else if (idade > 100) {
        alert('Idade Inválida!');
      } else {
        navigate(`/ingresso-resumo?nome=${nome}&tipo=${tipo}&dia=${dia}`);
      }
    }
  };

  return (
    <section className="formulario">
      <h2 className="formulario_titulo">Preencha o formulário a seguir:</h2>
      <form className="formulario_flex" onSubmit={pegarInfo}>
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
          <option value="11/03">Sábado - 11/03</option>
          <option value="12/03">Domingo - 12/03</option>
        </select>

        <label htmlFor="data" className="formulario_label">Data de Nascimento:</label>
        <input type="date" id="data" required />

        <input className="botao" type="submit" value="Avançar!" />
      </form>
    </section>
  );
};

export default IngressoForm;
