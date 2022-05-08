import Navbar from './components/Navbar';
import HeroCard from './components/HeroCard';
import Card from './components/Card';
import data from './data/exp_card';
import './App.css';

function App() {
  const hero_images = ['img_1.jpg', 'img_2.jpg', 'img_3.jpg',
    'img_4.jpg', 'img_5.jpg', 'img_6.webp'];
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroCard photos={hero_images} />
        <div className="experiences">
          {data.map((exp_card) => {
            return <Card 
              key={exp_card.id}
              topic={exp_card.topic}
              img={exp_card.img}
              rating={exp_card.rating}
              rating_score={exp_card.rating_score}
              price={exp_card.price}
              country={exp_card.country}
            />
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
