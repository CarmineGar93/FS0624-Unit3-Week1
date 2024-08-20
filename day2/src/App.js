import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
