import { FormEventHandler, useState } from "react";
import IngressoResultado from "../../pages/IngressoResultado";

const Validacao: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  
  const [Inome, setNome] = useState('')
  const [Itipo, setTipo] = useState('')
  const [Idia, setDia] = useState('')

  const data = document.querySelector<HTMLInputElement>('#data')?.value;

  const nome = document.querySelector<HTMLInputElement>('#nome')?.value;
  setNome(nome ? nome : '')
  const email = document.querySelector<HTMLInputElement>('#email')?.value;
  const tipo = document.querySelector<HTMLInputElement>('#tipo')?.value;
  setTipo(tipo ? tipo : '')
  const dia = document.querySelector<HTMLInputElement>('#dia')?.value;
  setDia(dia ? dia : '')

  if (data) {
    const nascimento = new Date(data);
    const idade = Math.floor((Date.now() - nascimento.getTime()) / (31557600000));
    if (idade <= 16) {
      return (alert('Você precisa ter no mínimo 16 anos.'))
    }
  }

  console.log('1', Inome, Itipo, Idia)

  return (
    <>
      <IngressoResultado
        nome={nome}
        tipo={tipo}
        dia={dia}
      />
      {window.location.href = '/ingresso-resumo'}
    </>
  )
}

export default Validacao;