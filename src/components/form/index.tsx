// import { Formik, Form, Field } from 'formik';
import Validacao from './validacao';
import './form.css';

const Formulario = () => {
  return (
      <section className="formulario">
        <h2 className="formulario_titulo">Preencha o formulário a seguir:</h2>
        <form className="formulario_flex" onSubmit={Validacao}>

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

          <input className='botao' type="submit" value="Avançar!" />
        </form>
      </section>
  )
}
export default Formulario;