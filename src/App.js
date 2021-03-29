import './App.css';
import CardTempo from './routes/exercicioUm/CardTempo'


function App() {

  let cidades = [3448433,3452925,3456127]
  let renderizar = []
  for(let i=0; i < cidades.length;i++){
    renderizar.push(<CardTempo cidade={cidades[i]} key={i}/>)
  }

  return (
    <div className="App">
        <div className="allCards">
          {renderizar}
        </div>
      </div>
  );
}

export default App;
