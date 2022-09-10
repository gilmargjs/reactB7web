import { useState } from "react";

const App = () => {
  //constante show iniciando com true
  const [show, setShow] = useState(true);

  //função togger alternando entre false e true
  const handleClick = () =>{
    setShow(!show);
  }

  return (
    <div>
      {/* botão comevento click e condiçaõ de mudança de nome do mesmo */}
      <button onClick={handleClick}>{show?'Fechar':'Abrir'}</button>
      {/* condicional show para aparecer o texto */}
      {show && <div> O Texto está Aberto Gilmar</div>}

    </div>
  )
}
export default App;