import "../globals.css";
import "../../styles/sport.css";
import CarDetail from "@/components/Car-Card";
export default function Sport(){
    return(
        <div className="sport-car-page">
            <h1>Sports Car</h1>
            <CarDetail 
                name="Ferrari 488 GTB"
                engine="3.9L Twin-Turbo V8, 661 horsepower"
                transmission="7-speed dual-clutch automatic"
                speed="205 mph"
                image="/sport-car/Ferrari 488 GTB.jpg"
                features={[
                    "Aerodynamic enhancements for high speed",
                    "Carbon-ceramic brakes",
                    "Race-inspired cockpit",
                    "F1-Trac traction control system"
                ]}
            />
            <CarDetail 
                name="Lamborghini Aventador"
                engine="6.5L V12, 730 horsepower"
                transmission="7-speed automated manual"
                speed="217 mph"
                image="/sport-car/Lamborghini Aventador.jpg"
                features={[
                    "Scissor doors for iconic entry",
                    "All-wheel drive for stability",
                    "Customizable driving modes",
                    "High-revving naturally aspirated engine"
                ]}
            />
            <CarDetail 
                name="Bugatti Chiron"
                engine="8.0L Quad-Turbo W16, 1500 horsepower"
                transmission="7-speed dual-clutch automatic"
                speed="261 mph"
                image="/sport-car/bugatti.jpg"
                features={[
                    "Extreme aerodynamic design",
                    "High-performance braking system",
                    "Luxury interior with custom options",
                    "Carbon-fiber monocoque structure"
                ]}
            />
            <CarDetail 
                name="Porsche 911 Turbo S"
                engine="3.8L Twin-Turbo Flat-6, 640 horsepower"
                transmission="8-speed dual-clutch automatic"
                speed="205 mph"
                image="/sport-car/Porsche1.jpg"
                features={[
                    "Advanced aerodynamics with adaptive rear spoiler",
                    "All-wheel drive",
                    "Porsche Active Suspension Management",
                    "Sport Chrono package with performance display"
                ]}
            />
        </div>
    )
}