import styled from "styled-components";

type BotaoProps = {
    bg:string;
    small:boolean;
}

export const Botao = styled.button<BotaoProps>`
<font-size:${(props) => props.small ? '15px' : '40px'};
color: red;
background-color: ${props =>props.bg};
`;