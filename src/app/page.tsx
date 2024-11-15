import "../app/globals.css";
import "../styles/page.css";
import Image from "next/image";
import Cardatailed from "@/components/Hero-Card";

export default function Home(){
    return(
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-left-side">
                    <Image
                    src="/hero-section-img.webp"
                    alt="landing page car image"
                    height={400}
                    width={700}
                    className="car-img"
                    />
                </div>
                <div className="hero-right-side">
                    <h1>Discover Your Next Drive with CarSpace</h1>
                    <p>Explore a handpicked selection of the finest cars from around the world. Whether you are looking for the thrill of a sports car, the versatility of an SUV, or the luxury of a high-end model, CarSpace brings you detailed information, images, and prices to help you make the perfect choice. Start your journey with us today and find the car that fits your lifestyle.</p>
                </div>
            </div>
            <Cardatailed 
            headline="Unleash the Power and Thrill of High-Performance Sports Cars"
            description=" Built for thrill-seekers, sports cars deliver an exhilarating blend of power, agility, and breathtaking design. Engineered with lightweight materials, high-performance engines, and aerodynamic shapes, these vehicles are designed to maximize speed and handling. The responsive steering, quick acceleration, and cutting-edge braking systems make each drive a dynamic experience. From iconic coupes to powerful roadsters, sports cars embody the spirit of adventure and innovation. Enjoy unmatched style, advanced driving modes, and the rush of hitting top speeds on both highways and tracks. Every curve and detail reflects a dedication to performance."
            price=" $60,000 - $120,000"
            />
            <Cardatailed 
            headline="Explore the World with Robust and Versatile SUVs"
            description="SUVs are designed for those who crave versatility, space, and reliability. With high ground clearance, robust engines, and all-terrain capability, they are perfect for both urban roads and rugged trails. Families and adventurers alike appreciate their spacious cabins, ample storage, and seating for up to eight passengers. Modern SUVs come equipped with the latest safety features, infotainment systems, and hybrid options for those conscious of fuel economy. Whether you’re embarking on a road trip, tackling rough terrain, or running daily errands, SUVs provide the ideal combination of comfort, strength, and practicality."
            price=" $40,000 - $90,000"
            />
            <Cardatailed 
            headline="Experience Timeless Elegance and Comfort with Luxury Cars"
            description="Luxury cars represent the pinnacle of refinement, where cutting-edge technology and lavish interiors combine to create an unrivaled driving experience. With leather seating, advanced entertainment systems, and meticulous craftsmanship, luxury vehicles cater to those who demand the best. From smooth, quiet rides to adaptive features that anticipate your needs, these cars elevate every journey into a pleasurable escape. Enjoy enhanced safety features, seamless connectivity, and the assurance of premium engineering. Whether you are looking for a grand touring sedan or a luxurious SUV, these cars redefine elegance and comfort." 
            price=" $80,000 - $150,000"
            />
        </div>
    )
}