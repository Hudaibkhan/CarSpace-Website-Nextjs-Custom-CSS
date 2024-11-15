import "../globals.css";
import "../../styles/suv.css";
import CarDetail from "@/components/Car-Card";

export default function Suv(){
    return(
        <div className="suv-car-page">
            <h1>SUV & Truck Collection</h1>
            
            <CarDetail 
                name="Mercedes-Benz AMG G 63"
                engine="4.0L V8 Biturbo, 577 horsepower"
                transmission="9-speed automatic"
                speed="149 mph"
                image="/suv-car/mercedes-amg.jpg"
                features={[
                    "All-wheel drive with 3 locking differentials",
                    "High ground clearance for off-road capability",
                    "Luxurious leather interior",
                    "Advanced driver assistance system"
                ]}
            />
            <CarDetail 
                name="Ford F-150 Raptor"
                engine="3.5L V6 EcoBoost, 450 horsepower"
                transmission="10-speed automatic"
                speed="107 mph"
                image="/suv-car/ford-f150.jpg"
                features={[
                    "High-output off-road suspension",
                    "All-terrain tires with reinforced sidewalls",
                    "10,000 lb towing capacity",
                    "Trail Control™ and Terrain Management System"
                ]}
            />
            <CarDetail 
                name="Toyota Land Cruiser"
                engine="5.7L V8, 381 horsepower"
                transmission="8-speed automatic"
                speed="130 mph"
                image="/suv-car/land-cruiser.jpg"
                features={[
                    "Full-time 4WD with locking center differential",
                    "Kinetic Dynamic Suspension System",
                    "Premium leather-trimmed interior",
                    "14 JBL® speaker audio system"
                ]}
            />            
            <CarDetail 
                name="Range Rover"
                engine="5.0L Supercharged V8, 518 horsepower"
                transmission="8-speed automatic"
                speed="155 mph"
                image="/suv-car/range-rover.jpg"
                features={[
                    "All-Wheel Drive with Terrain Response® 2",
                    "Executive Class rear seating",
                    "Panoramic sunroof",
                    "Adaptive Cruise Control"
                ]}
            />

        </div>
    )
}