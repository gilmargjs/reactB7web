import styled from "styled-components";
type ContainerProps = {
    cl: string;
    bg: string;
}

export const Container = styled.div<ContainerProps>`
background-color:${Props => Props.bg};
color:${props => props.cl};
width:1350px;
margin:0;

@media (max-width: 500px){
    background-color:blue;
}
span {
    background-color:blue;
    a{
        color:#fff;
        &:hover{
            background-color:yellow;
            border-radius:10px;
            color:#000;
        }
    }
}

div {
    color:red;
    background-color:blue;
    border-radius:10px;

    &:hover{
        color:blue;
        background-color:yellow;
    }

   

}


}

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