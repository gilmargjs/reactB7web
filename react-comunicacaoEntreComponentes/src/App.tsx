import { Botao } from './componentes/botao';

const App = () => {
  let textoDoBotao = 'Meu Botão';
  //função recebendo texto com parametro
  const botaoEventAction = (txt:string) =>{
    alert('Frase do App do ' + txt);
  }

  return (
    <div>
      <Botao text={textoDoBotao } clickFn={botaoEventAction}/>
    </div>
  );
};
export default App;