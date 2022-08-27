import { Fragment } from "react";

type Props = {
    url: string;
    legend: string;
}

export const Photo = ({ url, legend }:Props) =>{
    return (
        <>
            <img src={url} alt="" />
            <p> {legend} </p>
        </>
    )
}

// fragment eo o conceito de retornar mais de um elemento
// ou seja no lugar de ser colocada uma div é colocado uma teg 
// <Fragment></Fragment> porém é preciso antes importar o reactNode 
// ou usar uma tag vazia
