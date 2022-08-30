type Props = {
    //props opcional,significa que pode ser usado sem texto 
    title?: string;
}
//criando e exportando componente Header
//importando props
export const Header = ({ title }:Props) => {
    return (
      <header>
        {/* usando props titlle */}
        <h1>{title}</h1>
        <hr />
      </header>
    )
  }