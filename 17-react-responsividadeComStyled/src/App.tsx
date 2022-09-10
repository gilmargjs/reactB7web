import * as C from './AppStyles';
const App = () => {

  return (
    <div>
      <C.Container bg='pink' cl='gray'>
        <span><a href=""> texto do componente</a></span>
        <div>eu sou uma div</div>

        <C.Botao cl="red" bg="yellow">Botão Grande</C.Botao>
        <C.Botao cl="#fff" bg="#00ff00" small>Botao Pequeno</C.Botao>
        <C.Paragrafo>olá gilmar</C.Paragrafo>
      </C.Container>
    </div>
  )
}
export default App;