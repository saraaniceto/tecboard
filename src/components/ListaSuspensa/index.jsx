import "./lista-suspensa.estilos.css"

export function ListaSuspensa(props){
    return(
        <select {...props} className="lista-suspensa">
            <option value="">Selecione uma opção</option>
            <option value="front-end">Front-End</option>
            <option value="back-end">Back-End</option>
            <option value="ia">Inteligência Artificial</option>
        </select>
    )
}