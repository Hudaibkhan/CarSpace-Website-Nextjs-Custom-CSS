import "../app/globals.css";
import "../styles/hero-card.css"
interface CarDatailed{
  headline:string,
  description:string,
  price:string
}

export default function Cardatailed ({headline,description,price}:CarDatailed) {
  return (
    <div className="hero-car-section">
      <h2>{headline}</h2>
      <p className="description">{description}</p>
      <p className="price"><span>Average Price</span>{price}</p>
    </div>
  );
};
