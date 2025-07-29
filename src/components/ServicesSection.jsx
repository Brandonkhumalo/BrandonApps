import { useState } from "react";
import '../styles/home.css';

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped((prev) => !prev);

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="card-grid">
        <FlipCard
          front="Mobile Development"
          back="We build high-performance mobile apps for iOS and Android."
        />
        <FlipCard
          front="Web Development"
          back="Custom web apps tailored to your business needs."
        />
        <FlipCard
          front="Desktop Development"
          back="Scalable and secure desktop solutions for Windows and macOS."
        />
      </div>
    </div>
  );
};

export default ServicesSection;