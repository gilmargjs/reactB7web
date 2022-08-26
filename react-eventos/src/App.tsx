const App = () => {
  
  //função de click
  const handleClick = () => alert('clicou!');


  return (
    <div>
      <button onClick={handleClick}>Clique Aqui</button>

    </div>
  );
}

export default App;