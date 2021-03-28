import {useState} from 'react'

function GerarDocumento(){

const[pessoaAtual, setPessoaAtual] = useState({
    nome: '',
    cpf:''
})

const [pessoa, setPessoa] = useState({
    nome: '',
    cpf: ''
})

    function handleClick(){
        const { nome, cpf } = pessoaAtual
        setPessoa ({ nome, cpf })
    }

    function handleChange(e){
        const propriedade = e.target.name
        setPessoaAtual({
            ...pessoaAtual,
            [propriedade]: e.target.value
        })
        pessoaAtual[propriedade] = e.target.value
    }

    return(
        <>
        <div>
            <label>Nome: </label>
            <input type="text" name="nome" placeholder="Digite seu nome:" onChange={handleChange}/>
        </div>
        <div>
            <label>CPF: </label>
            <input type="text" name="cpf" placeholder="Digite seu CPF:" onChange={handleChange}/>
        </div>
        <div className="send">
            <button onClick={handleClick}>Gerar Documento</button>
        </div>
        <div>
            <p name="documento" id="documentoFinal" cols="30" rows="10">
                Eu, {pessoa.nome} , portador do CPF {pessoa.cpf} , aceito os termos deste contrato
            </p>
        </div>
        </>
    )
}

export default GerarDocumento