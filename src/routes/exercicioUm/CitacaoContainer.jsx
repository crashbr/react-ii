import {useState} from 'react'

const CitacaoContainer = () => {
    let finalText

    const [citacao, setCitacao] = useState('Esse é o texto inicial');
  
    function handleClick(){
      setCitacao(finalText)
    }
  
    function handleChange(e){
      //console.log('modificanto valor',e.target.value)
      finalText = e.target.value;
    }
    return (
        <>
            <div>
                <label>Citação</label>
            </div>
                <blockquote id="cit">
                    "{citacao}"
                </blockquote>
            <div>
                <input type="text" placeholder="Novo Texto" id="newCit" onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}>Alterar texto</button>
            </div>
        </>
    )
}

export default CitacaoContainer