import Navbar from './components/Navbar';
import HeroCard from './components/HeroCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroCard />
      </main>
    </div>
  );
}

export default App;
