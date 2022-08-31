import React, { useState } from 'react';

const App = () => {
  //parametro inicial
  const [name, setName] = useState('')

  const handleInput = (event:React.ChangeEvent<HTMLInputElement>) => {

    setName( event.target.value)
  }


  return (
    <div>
      Nome:
      <input type="text" value={name} onChange={handleInput} />
      <hr />
      Seu Nome é: {name}
    </div>
  )
}

export default App;