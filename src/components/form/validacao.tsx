import { FormEventHandler } from "react";
import Ingresso from "../ingresso";


const Validacao: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();

  const data = document.querySelector<HTMLInputElement>('#data')?.value;
  const nome = document.querySelector<HTMLInputElement>('#nome')?.value;
  const tipo = document.querySelector<HTMLInputElement>('#tipo')?.value;
  const dia = document.querySelector<HTMLInputElement>('#dia')?.value;
  const email = document.querySelector<HTMLInputElement>('#email')?.value;

  if (data) {
    const nascimento = new Date(data);
    const idade = Math.floor((Date.now() - nascimento.getTime()) / (31557600000));
    if (idade <= 16) {
      return (alert('Você precisa ter no mínimo 16 anos.'))
    } else if (idade > 100) {
      return (alert('Idade Inválida!'))
    }
  }

  return (
    <>
      <Ingresso
        nome= "nome"
        tipo= "tipo"
        dia= "dia"
      />
      {console.log('1', nome, tipo, dia)}
      {window.location.href = '/ingresso-resumo'}
    </>
  )
}

export default Validacao;