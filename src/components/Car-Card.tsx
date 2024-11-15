import Image from "next/image";
import "../styles/car-card.css";
interface CarDetailProps {
    name: string;
    engine: string;
    transmission: string;
    speed: string;
    features: string[];
    image:string;
}

const CarDetail= ({ name, engine, transmission, speed, features ,image}:CarDetailProps) => {
    return (
        <div className="car-detail">
            <div>
                <Image
                src={image}
                alt="luxury car images"
                height={300}
                width={400}
                className="car-image"/>
            </div>
            <div className="car-detailed">
                <h2>{name}</h2>
                <p><strong>Engine:</strong> {engine}</p>
                <p><strong>Transmission:</strong> {transmission}</p>
                <p><strong>Top Speed:</strong> {speed}</p>
                <h3>Features:</h3>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarDetail;
