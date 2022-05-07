import Navbar from './components/Navbar';
import HeroCard from './components/HeroCard';
import Card from './components/Card';
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
          <Card
            img="img_7.webp"
            rating="5.0"
            rating_score={6}
            topic="Life Lessons with Katie Zaferes"
            price={136}
            country="Malaysia"
          />
          <Card
            img="img_8.jpg"
            rating="5.0"
            rating_score={6}
            topic="Life Lessons with Katie Zaferes"
            price={136}
            country="UK"
          />
          <Card
            img="img_9.jpg"
            rating="5.0"
            rating_score={6}
            topic="Life Lessons with Katie Zaferes"
            price={136}
            country="Canada"
          />
          <Card
            img="img_10.jpg"
            rating="5.0"
            rating_score={6}
            topic="Life Lessons with Katie Zaferes"
            price={136}
            country="Ghana"
          />
          <Card
            img="img_11.jpg"
            rating="3.6"
            rating_score={6}
            topic="Fruitful Labour"
            price={100}
            country="UK"
          />
          <Card
            img="img_12.jpeg"
            rating="4.8"
            rating_score={20}
            topic="Lessons from my mother"
            price={178}
            country="China"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
