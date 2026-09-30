import heroImage from "../src/assets/hero.png";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-image">
        <img src={heroImage} alt="Working illustration" />
      </div>

      <div className="hero-content">

        <h1>
          Download Now
        </h1>

        <h2>
          Lorem Ipsum
        </h2>

        <button className="download-btn">
          ▶ &nbsp; Download now
        </button>

      </div>

    </section>
  );
}

export default Hero;