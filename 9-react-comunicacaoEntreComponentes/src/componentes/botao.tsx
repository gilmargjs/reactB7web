type Props = {
    text: string;

    //função que não retorna nada
    //passada com parametro
    clickFn: (txt:string) => void;

}
export const Botao = ({text, clickFn}:Props) => {
    //função que executa outra função
    const handleClick = () =>{
        //função
        clickFn('Gilmar')
    }
    return (
        //evento de click com atribuição de texto do botão
        <button onClick={handleClick}>{text}</button>
    )
}