import IngressoResultado from '../../pages/IngressoResultado';
import Ingresso, { ingresso } from '../ingresso';
import './form.css';
import { FormEventHandler, useState, createContext } from "react";

export const Formulario = () => {
  const [nome, setNome] = useState('Void')
  const [tipo, setTipo] = useState('Void')
  const [dia, setDia] = useState('Void')
  const [data, setData] = useState('Void')
  const CIngresso = createContext<ingresso>({ nome, tipo, dia });

  function pegarInfo() {
    const setterNome = document.querySelector<HTMLInputElement>('#nome')?.value;
    setNome(setterNome ?? 'Não encontrado');
    const setterData = document.querySelector<HTMLInputElement>('#data')?.value;
    setData(setterData ?? 'Não encontrado');
    const setterTipo = document.querySelector<HTMLInputElement>('#tipo')?.value;
    setTipo(setterTipo ?? 'Não encontrado');
    const setterDia = document.querySelector<HTMLInputElement>('#dia')?.value;
    setDia(setterDia ?? 'Não encontrado');

    const Valores = { nome, tipo, dia };
    console.log("0", Valores)

    return (
      <CIngresso.Provider value={Valores} />
    )
  }

  const Validacao: FormEventHandler<HTMLFormElement> = (event: any) => {
    event.preventDefault();
    if (data) {
      const nascimento = new Date(data);
      const idade = Math.floor((Date.now() - nascimento.getTime()) / (31557600000));
      if (idade < 16) {
        return (alert('Você deve ser maior que 16 anos.'))
      } else if (idade > 100) {
        return (alert('Idade Inválida!'))
      }
    }
    return (
      <CIngresso.Provider value={{ nome, tipo, dia }} />
    )
  }
  return (
    <>
      <section className="formulario">
        <h2 className="formulario_titulo">Preencha o formulário a seguir:</h2>
        <form className="formulario_flex" onSubmit={Validacao} onChange={pegarInfo}>

          <label htmlFor="nome" className="formulario_label">Nome Completo:</label>
          <input type="text" id="nome" required />

          <label htmlFor="email" className="formulario_label">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="tipo" className="formulario_label">Tipo do Ingresso:</label>
          <select id='tipo' required>
            <option value=""></option>
            <option value='Pista Comum'>Pista Comum</option>
            <option value='Pista Premium'>Pista Premium</option>
            <option value='Cadeiras Térreo'>Cadeiras Térreo</option>
            <option value='Cadeiras Superiores'>Cadeiras Superiores</option>
          </select>

          <label htmlFor="dia" className='formulario_label'>Dia:</label>
          <select id="dia" required>
            <option value=""></option>
            <option value="Sábado">Sábado - 11/03</option>
            <option value="Domingo">Domingo - 12/03</option>
          </select>

          <label htmlFor="data" className="formulario_label">Data de Nascimento:</label>
          <input type="date" id="data" required />

          <input className='botao' type="submit" value="Avançar!" onClick={pegarInfo} />
        </form>
      </section>
    </>
  )
}
export default Formulario;