import { useState } from "react"

function Sorteio(){

    const[numero, setNumero] = useState('XX')

    const [valoresSorteio, setValoresSorteio] = useState({
        inicio: 0,
        final: 100
    })

    function handleClick(){
        let sorteado = Math.floor(Math.random() * (valoresSorteio.final - valoresSorteio.inicio)) + 1 + valoresSorteio.inicio
        setNumero(sorteado)

    }

    function handleChange(e){
        const propriedade = e.target.name
        setValoresSorteio({
            ...valoresSorteio,
            [propriedade]: parseInt(e.target.value)
        })
        valoresSorteio[propriedade] = e.target.value

    }

    return(
        <div>
            <h1>Sorteie um número</h1>
            <div>
                <label htmlFor="inicio">De: </label>
                <input type="number" name="inicio" onChange={handleChange}/>

                <label htmlFor="final">Até: </label>
                <input type="number" name="final" onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}> Gerar Sorte </button>
            </div>
            <div>
                <p>O número sorteado é: </p>
                <p><strong>{numero}</strong></p>
            </div>
        </div>
    )

}

export default Sorteio