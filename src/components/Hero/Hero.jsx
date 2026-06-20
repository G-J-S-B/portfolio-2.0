import { useState, useEffect } from "react";
import './Hero.css'


function Hero() {

const titles = [
"Technical Project Manager",
"Digital Artist",
"Occasional Programmer",
"Project Coordinator",  
];

const [text, setText] = useState("");
const [index, setIndex] = useState(0);
const [deleting, setDeleting] = useState(false);
  

  useEffect(() => {
    const current = titles[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);


  return (
    <section className="hero" id="home">
        <div className="hero-section-left">
            <h1>Gerrard <br /> <span className="make-blue">JS</span> Barrows</h1>
            <h2>
                {text}
                <span className="cursor">|</span>
            </h2>
            <div className="hero-blurb">
                <p>
                    Nice to virtually meet you.
                </p>
                <p>
                    I have <strong className="make-blue">+7 years</strong> of industry experince under my belt.
                    I also dabble in <strong className="make-blue">Coding</strong> and love to create <strong className="make-blue">Art</strong> digitally. <br /> <br />
                    If you have a moment, I'd love to how you what I've accomplished over the years.
                </p>
            </div>
        </div>

        <div className="hero-section-right">
                <img className="floating-image" src="/images/hero.png" alt=""/>
        </div>

        
    </section>
  );
}

export default Hero;