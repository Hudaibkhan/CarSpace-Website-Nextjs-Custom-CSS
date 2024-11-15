import "../app/globals.css";
import "../styles/header.css";
import Link from "next/link";

export default function Header(){
    return(
        <div className="header-page">
            <h2>CarSpace</h2>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/luxury">Luxury</Link>
                </li>
                <li>
                    <Link href="/sport">Sport</Link>
                </li>
                <li>
                    <Link href="/suv">Suv</Link>
                </li>
            </ul>
        </div>
    )
}