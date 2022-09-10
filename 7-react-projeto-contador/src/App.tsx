import { useState } from 'react';
const App = () => {
  //parametro inicial
  const [numero, setNumero] = useState(0);

  const handleMais = () => {
    //inclemento
    setNumero(numero + 1);
  };

  const handleMenos = () => {
    //Declemento
    setNumero(numero - 1);
  };

  return (
    <div>
      <button onClick={handleMenos}> - </button><br />
     <h1> O número é: {numero}</h1><br/>
      <button onClick={handleMais}> + </button>

    </div>
  )
}

export default App;