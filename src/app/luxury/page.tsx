import "../globals.css";
import "../../styles/luxury.css";
import CarDetail from "@/components/Car-Card";


export default function Luxury(){
    return(
        <div className="luxury-cars-page">
        <h1>Luxury Cars</h1>
        <CarDetail 
            image="/luxury-car/rolls.jpg"
            name="Rolls-Royce Phantom"
            engine="6.75L V12, 563 horsepower"
            transmission="8-speed automatic"
            speed="155 mph"
            features={[
                "Rear-wheel steering for agile handling",
                "Handcrafted wood and leather interior",
                "Star-studded headliner",
                "Advanced soundproofing"
            ]}
        />
        <CarDetail 
            image="/luxury-car/Bentley Mulsanne.jpg"
            name="Bentley Mulsanne"
            engine="6.75L Twin-Turbo V8, 505 horsepower"
            transmission="8-speed automatic"
            speed="184 mph"
            features={[
                "Hand-stitched leather seats",
                "20-speaker Naim audio system",
                "Champagne cooler with crystal flutes",
                "Reclining, heated, and ventilated seats"
            ]}
        />
            <CarDetail 
                name="Mercedes-Maybach S-Class"
                engine="4.0L V8 Biturbo with EQ Boost, 496 horsepower"
                transmission="9-speed automatic"
                speed="155 mph"
                image="/luxury-car/mercedes-s-class.jpg"
                features={[
                    "Full recline, heated rear seats",
                    "Magic Body Control suspension",
                    "Burmester® high-end 4D surround sound",
                    "Customizable fragrance system"
                ]}
            />
            <CarDetail 
                name="Aston Martin DB11"
                engine="5.2L Twin-Turbo V12, 630 horsepower"
                transmission="8-speed automatic"
                speed="208 mph"
                image="/luxury-car/Aston-Martin-DB11.jpg"
                features={[
                    "Sleek, aerodynamic design",
                    "Bang & Olufsen 13-speaker audio system",
                    "Hand-stitched leather interior",
                    "Adjustable drive modes for varied performance"
                ]}
            />  
        </div>
    )
} 