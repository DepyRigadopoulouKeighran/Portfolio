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
          Hallo, ich bin Depy.
          <br />
          <br />
          Ich mag Dinge, die funktionieren.
          <br />
          Strukturen, die Sinn ergeben.
          <br />
          Und Lösungen, die nicht nur gut aussehen, sondern auch tragen.
          <br />
          <br />
          Lange habe ich in Rollen gearbeitet, in denen Organisation, Verantwortung und Überblick gefragt waren. 
          Irgendwann wurde mir klar, dass ich nicht nur mit Systemen arbeiten möchte, sondern verstehen will, wie sie entstehen.
          <br />
          <br />
          Also habe ich begonnen, mich technisch weiterzuentwickeln.
          Heute verbinde ich meine Erfahrung aus der Praxis mit neuen digitalen Kompetenzen und bewege mich bewusst in Richtung Informatik.  
          <br />  
          <br />
          Ich bin neugierig, unabhängig und immer am Puls der Zeit mit einem Sinn für Ästhetik, Struktur und einer guten Portion Humor.
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
