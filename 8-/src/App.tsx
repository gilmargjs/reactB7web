import React, { useState } from "react";

const App = () => {
  //constates e os states
  const [nome, setNome] = useState('');
  const [sobreNome, setSobre] = useState('');
  const [idade, setIdade] = useState('');

  //função que busca o nome 
  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    //evento de busca de valor no mone
    setNome(event.target.value);

  }

  //função que busca o sobreNome
  const handleSobre = (event: React.ChangeEvent<HTMLInputElement>) => {
    //evento de busca de valor do sobreNome
    setSobre(event.target.value);

  }
  //função que busaca a idade
  const handleIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
    //evento de busca de valor da idade
    setIdade(event.target.value);

  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={nome} onChange={handleNome} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobreNome} onChange={handleSobre} />
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleIdade} />
      </div>

      <hr />

      Olá {nome} {sobreNome}, tudo bem?<br />
      Você tem {idade} anos.
    </div>
  );
}

export default App;