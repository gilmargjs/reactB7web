//importando componente Header
import { Header } from './componentes/Header';
//componente coom jsx
const App = () => {
  return (
    <div>
      {/* usando o componente header */}
      {/* enviando props */}
      <Header title='Primeiro cabeçalho '/>
      <Header title='segundo cabeçalho '/>
      <Header title='terceiro cabeçalho '/>
      Aqui é o corpo
    </div>
  );
}
export default App;