import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import ButtonComponentDynamic from './components/ButtonComponentDynamic';
const nomi = ['Salva', 'Reset', 'Cancella']
let scelto = nomi[Math.floor(Math.random() * 3)]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bottone dinamico</h1>
        <ButtonComponent text={scelto} />
        <ButtonComponentDynamic />
        <h1>Immagine dinamica</h1>
        <ImageComponent src="https://placedog.net/300" alt="Doggo" css="App-logo" />
      </header>
    </div>
  );
}

export default App;
