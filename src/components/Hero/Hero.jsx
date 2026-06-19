import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-section-left">
        <h1>Gerrard <br /> <span className="make-blue">JS</span> Barrows</h1>
        <h2>Technical Project Manager</h2>
        <div className="hero-blurb">
          <p>Nice to virtually meet you.</p>
          <p>
            I have 7+ years of industry experince under my belt. <br />
            I also dabble in Coding and love to create Art digitally. <br />
            If you have a moment, I'd love to how you what I've accomplished over the years
          </p>
        </div>
      </div>

      <div className="hero-section-right">
        <img src="/images/hero.png" alt="" />
      </div>
    </section>
  );
}

export default Hero;