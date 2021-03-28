import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCloud, faCloudShowersHeavy, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './CardTempo.css'
import { useState } from 'react'
import axios from 'axios'

function CardTempo(props){

    let dataAtual = new Date()
    let day = dataAtual.getDate()
    let month = dataAtual.getMonth()+1
    let year = dataAtual.getFullYear()

    const[icone,setIcone] = useState('')
    const data = `${day}/${month}/${year}`
    const[tempMin, setTempMin] = useState('')
    const[tempMax, setTempMax] = useState('')
    const[cidade,setCidade] = useState('')


    async function preencherCard(cidade){
        let url = "https://api.openweathermap.org/data/2.5/weather?id="+ cidade +"&units=metric&appid="+process.env.REACT_APP_API

        await axios.get(url)
        .then((res) => {
            console.log(res.data)
            setTempMin(Math.floor(res.data.main.temp_min))
            setTempMax(Math.floor(res.data.main.temp_max))
            setCidade(res.data.name)

            if(res.data.weather[0].main === "Clear"){
                setIcone(faSun)
            } else if(res.data.weather[0].main === "Fog"){
                setIcone(faCloud)
            } else {
                setIcone(faCloudShowersHeavy)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    preencherCard(props.cidade)

    return(
            <div className="container" id="cardPrincipal">
                <div id="info">
                    <div id="data">
                        <p>{cidade}</p>
                        <p>{data}</p>
                    </div>
                    <div className="imagemTempo">
                            <FontAwesomeIcon className="imagemEstado" icon={icone}/>
                    </div>
                    <div className="temperatura">
                        <div>
                            <p id="max"><FontAwesomeIcon className="setas" icon={faArrowUp}/>{tempMax}º</p>
                        </div>
                        <div>
                            <p id="min"><FontAwesomeIcon className="setas" icon={faArrowDown}/>{tempMin}º</p>
                        </div>
                    </div>
                </div>
                <div className="botaoEstiliza">
                    <button id="destacar">Destacar Card</button>
                </div>
            </div>
    )
}

export default CardTempo