import { Pessoa } from "./componentes/Pessoa";
const App = () => {
  let list = [
    { nome: 'Gilmar', age: 42 },
    { nome: 'Gilmax', age: 22 },
    { nome: 'Jois', age: 40 },
    { nome: 'Jefferson', age: 16 },
    { nome: 'Jonas', age: 12 }
  ];

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <ul>
        {/* obs:Arrow function com os parenteses está dando problema list.map(()=>{<Pessoa key={index} data={item} />})  */}
        {list.map((item, index) => <Pessoa key={index} data={item} />)}

      </ul>
    </div>
  );
}

export default App;