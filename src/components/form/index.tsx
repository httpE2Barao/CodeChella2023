import './form.css';

const Formulario = () => {
  return (
    <section className="formulario">
      <h2 className="formulario_titulo">Preencha o formulário a seguir:</h2>
      <form className="formulario_flex">

        <label htmlFor="nome" className="formulario_label">Nome Completo:</label>
        <input type="text" id="nome" required/>

        <label htmlFor="email" className="formulario_label">Email:</label>
        <input type="email" id="email" required/>

        <label htmlFor="tipo" className="formulario_label">Tipo do Ingresso:</label>
        <select id='tipo' required>
          <option value="" selected></option>
          <option value='PC'>Pista Comum</option>
          <option value='PP'>Pista Premium</option>
          <option value='CT'>Cadeiras Térreo</option>
          <option value='CS'>Cadeiras Superiores</option>
        </select>


        <label htmlFor="date" className="formulario_label">Data de Nascimento:</label>
        <input type="date" id="date" required/>

        <input className='botao' type="submit" value="Avançar!" />

      </form>
    </section>
  )
}
export default Formulario;