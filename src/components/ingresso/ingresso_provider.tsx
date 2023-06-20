import React, { createContext, useState, useEffect } from 'react';

export interface IngressoContextValue {
  nome: string;
  tipo: string;
  dia: string;
  setIngressoData: (nome: string, tipo: string, dia: string) => void;
}

export const IngressoContext = createContext<IngressoContextValue>({
  nome: 'Void',
  tipo: 'Void',
  dia: 'Void',
  setIngressoData: () => {},
});

const IngressoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [dia, setDia] = useState('');

  useEffect(() => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('tipo', tipo);
    localStorage.setItem('dia', dia);
  }, [nome, tipo, dia]);

  useEffect(() => {
    const storedNome = localStorage.getItem('nome');
    const storedTipo = localStorage.getItem('tipo');
    const storedDia = localStorage.getItem('dia');
    console.log('1', nome, tipo, dia)

    if (storedNome && storedTipo && storedDia) {
      setNome(storedNome);
      setTipo(storedTipo);
      setDia(storedDia);
      console.log('2', nome, tipo, dia)
    }
  }, []);

  const setIngressoData = (nome: string, tipo: string, dia: string) => {
    setNome(nome);
    setTipo(tipo);
    setDia(dia);
  };

  const ingressoData: IngressoContextValue = {
    nome,
    tipo,
    dia,
    setIngressoData,
  };

  return (
    <IngressoContext.Provider value={ingressoData}>
      {children}
    </IngressoContext.Provider>
  );
};

export default IngressoProvider;
