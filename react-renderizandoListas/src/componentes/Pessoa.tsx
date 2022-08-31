type Props = {
    data: {
        nome: string;
        age: number;
    }
}
export const Pessoa = ({ data }: Props) => {

    return (
        <li>
            {data.nome} - {data.age} Anos
        </li>
    );
}