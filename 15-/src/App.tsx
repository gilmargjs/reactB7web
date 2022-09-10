import * as C from './AppStyles';
const App = () => {

  return (
    <div>
      <C.Comtainer bg="gray" cl="red">
        texto do componente
        <C.Botao cl="red" bg="yellow">Botão Grande</C.Botao>
        <C.Botao cl="#fff" bg="#00ff00" small>Botao Pequeno</C.Botao>
        <C.Paragrafo>olá gilmar</C.Paragrafo>
      </C.Comtainer>
    </div>
  )
}
export default App;