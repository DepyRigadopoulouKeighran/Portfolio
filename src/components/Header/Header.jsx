import "../Header/header.css";
import "../About/About.jsx";

const Header = () => {
  return (
    <header className="  p-4 sticky top-0 z-50 headerBackground">
      <div className="container mx-auto flex justify-between text-xl items-center">
        <div className="space-x-8 ">
          <a target="_blank" href="https://github.com/DepyRigadopoulouKeighran">
            <i className="fa-brands fa-github text-5xl hover:scale-125 transition-transform icons"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/depy-rigadopoulou-keighran-8b3b07225/"
          >
            <i className="fa-brands  fa-linkedin text-5xl hover:scale-125 transition-transform icons"></i>
          </a>
        </div>
        <nav>
          <ul className="flex space-x-8 font-bold">
            <li className="hover:scale-125 transition-transform ">
              <a href="#homeSection">Startseite</a>
            </li>
            <li className="hover:scale-125 transition-transform">
              <a href="#aboutSection">Profil</a>
            </li>
            <li className="hover:scale-125 transition-transform">
              <a href="#portfolioSection">Projekte</a>
            </li>
            <li className="hover:scale-125 transition-transform">
              <a href="#skillsSection">Kenntnisse</a>
            </li>
            <li className="hover:scale-125 transition-transform">
              <a href="#contactSection">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
