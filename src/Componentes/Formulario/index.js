import CampoDeTexto from "../CampoDeTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"



const Formulario = () => {
    return(
        <section className="formulario">
            <h1>Adicione aqui o seu Pet</h1>
            <CampoDeTexto placeholder="Nome" tipo="text"/>
            <CampoDeTexto placeholder="Idade" tipo="number"/>
            <CampoDeTexto placeholder="Nome do dono" tipo="text"/>
            <ListaSuspensa label="Raça"/>
        </section>
    )
}

export default Formulario