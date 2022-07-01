import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from './data';

export default function App() {
  const cardElements = data.map(card => {
    return (
      <Card 
        key = {card.id}
        card = {card}
        // img = {card.coverImg}
        // rating = {card.stats.rating}
        // reviewCount = {card.stats.reviewCount}
        // location = {card.location}
        // title = {card.title}
        // price = {card.price}
        // openSpots = {card.openSpots}
      
      />
    )
  })

  return (
    <div>
      <Hero />
      <Navbar />
      <section className="cards-list">
        {cardElements}
      </section>
          
    </div>
  )
}

