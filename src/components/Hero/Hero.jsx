import { useState, useEffect } from "react";
import './Hero.css'
const titles = [
  "Technical Project Manager",
  "Digital Artist",
  "Occasional Programmer",
];

function Hero() {
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
    <section className="hero">
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
                    I have 7+ years of industry experince under my belt. <br /> 
                    I also dabble in Coding and love to create Art digitally. <br />
                    If you have a moment, I'd love to how you what I've accomplished over the years
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