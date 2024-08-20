import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <AllTheBooks genere="fantasy"/>
        <AllTheBooks genere="horror"/>
        <AllTheBooks genere="history"/>
        <AllTheBooks genere="romance"/>
        <AllTheBooks genere="scifi"/>
        <div className='mb-5 invisible'>a</div>
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
