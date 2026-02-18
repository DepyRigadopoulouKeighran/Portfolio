import "../About/about.css";
import myImage from "/images/cv.jpg";

const AboutPage = () => {
  return (
    <div
      id="aboutSection"
      className="flex flex-grow-0 justify-start flex-row-reverse items-center filter-about min-h-screen "
    >
      <div className=" w-1/3 mx-6 mr-20">
        <h2 className="text-6xl mt-36 titleAbout">Profil</h2>
        <br />
        <p className="text-2xl mt-4 mb-16 text-justify tracking-wider contentAbout">
          Ich bin angehende Webentwicklerin mit Kenntnissen sowohl im Frontend als 
          auch im Backend.  
          Ich habe Erfahrung mit HTML, CSS, JavaScript sowie grundlegenden Backend 
          Technologien.
          <br />
          <br />
          Ich interessiere mich besonders für die Entwicklung moderner und 
          benutzerfreundlicher Webanwendungen.
          <br />
          Mein Ziel ist es, praktische Erfahrung zu sammeln und mich sowohl fachlich 
          als auch persönlich weiterzuentwickeln.
          <br />
          <br />
        </p>
      </div>

      {/* Box */}
      <div className="mt-28 mr-20 w-80 h-80 colorFrame">
        {" "}
        <img
          className="mt-0 ml-9 w-80 h-80 image"
          src={myImage}
          alt="A picture of me"
        />
      </div>
    </div>
  );
};

export default AboutPage;
