//importando componente Header
import { Header } from './componentes/Header';
//importando componente Photo
import { Photo } from './componentes/Photo';

//componente coom jsx
const App = () => {
  return (
    <div>
      {/* usando o componente header */}
      {/* enviando props */}
      <Header title='Primeiro cabeçalho '/>
      <Header title='segundo cabeçalho '/>
      <Header title='terceiro cabeçalho '/>
      olá Gilmar
      <Photo url="https://www.google.com/google.jpg" legend="google" />
    </div>
  );
}
export default App;