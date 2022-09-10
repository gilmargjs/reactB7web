import styled from "styled-components";

export const Comtainer = styled.div<BotaoProps>`
background-color:${props => props.bg};
color:${props => props.cl};
`;


type BotaoProps = {
    //background
    bg: string;
    //color
    cl: string;
    //font-size
    small?: boolean;
}

//style Botão
export const Botao = styled.button<BotaoProps>`
font-size:${props => props.small ? '15px' : '40px'};
background-color: ${props => props.bg};
color:${props => props.cl};
`;

//style Paragrafo
export const Paragrafo = styled.p`
width:300px;
height:300px;
color:yellow;
background-color:red;
`;