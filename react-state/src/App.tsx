import { useState } from 'react';
const App = () =>{
  //parametro inicial
  const [numero, setName] = useState('Gilmar');

  const handleClick = () =>{
    //inclemento
    setName('jois');
  };

  return(
    <div>
      O número é: {numero}
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  )
}

export default App;