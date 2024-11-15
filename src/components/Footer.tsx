import "../app/globals.css";
import "../styles/footer.css";
import Image from "next/image";

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(      
        <div className="footer">
        <p>© {currentYear} Hudaib Production &mdash; All rights reserved.</p>
        <div className="contact-links">
            <a
              href="https://github.com/Hudaibkhan"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/github-icon.png"
                alt="GitHub"
                width={40}
                height={40}
                className="icon"

              />
            </a>
            <a
              href="https://www.linkedin.com/in/hudaib-khan-383b21330/"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/linkedin-icon.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="icon"

              />
            </a>
            <a
              href="https://www.npmjs.com/~hudaib"
              target="_blank"
              className="link-item"
            >
              <Image
                src="/npm-icon.png"
                alt="Gmail"
                width={30}
                height={30}
                className="icon"
              />
            </a>
          </div>
        </div>
    )
}