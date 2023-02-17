import "./ListaSuspensa.css"

const Racas = [
    {
        nome: "Pug",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-02-1024x683.webp"
    },
    {
        nome: "Shih Tzu",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-03-1024x683.webp"
    },
    {
        nome: "Buldogue",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-04-1024x746.webp"
    },
    {
        nome: "Dachshund (salsicha)",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-05-1024x684.webp"
    },

    {
        nome: "Pastor Alemão",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-06-1024x682.webp"
    },
    {
        nome: "Poodle",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-07-1024x683.webp"
    },
    {
        nome: "Rottweiler",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-08-1024x683.webp3"
    },
    {
        nome: "Labrador",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-09-1024x683.webp"
    },
    {
        nome: "Pinscher",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-10-1024x683.webp"
    },
    {
        nome: "Golden Retriever",
        imagem: "https://optimumpet.com.br/wp-content/uploads/2022/12/racas-de-cachorro-mais-comuns-11-1024x683.webp"
    },
    {
        nome: "Yorkshire",
        imagem: "https://recursos.tudodebicho.com.br/i/guiaderacas/yorkshire/yorkshire-terrier.jpg"
    }
]

const ListaSuspensa = (props) => {
    return(
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select name="Lista" id="">
                <option value=""></option>
                {Racas.map(raca => <option key={raca.nome} >{raca.nome}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa