import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
/* import AllTheBooks from './components/AllTheBooks'; */
import SingleBook from './components/SingleBook';
import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const jSons = {
  fantasy,
  history,
  horror,
  romance,
  scifi
}

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <SingleBook libro={jSons.fantasy[Math.floor(Math.random() * jSons.fantasy.length)]}/>
        {/* <AllTheBooks genere="fantasy"/>
        <AllTheBooks genere="horror"/>
        <AllTheBooks genere="history"/>
        <AllTheBooks genere="romance"/>
        <AllTheBooks genere="scifi"/> */}
        <div className='mb-5 invisible'>a</div>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
