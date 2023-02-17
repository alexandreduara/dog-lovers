import "./CampoDeTexto.css"

const CampoDeTexto = (props) => {
    return(
        <div className="campoDeTexto">
            <input type={props.tipo} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoDeTexto