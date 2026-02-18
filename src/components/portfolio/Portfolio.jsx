import "../portfolio/portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div id="portfolioSection">
        <div className="pb-20 filter-portfolio">
          <h2 className="text-6xl pt-32 pb-12 ml-48 titlePortfolio">
            Projekte
          </h2>
          <div className="grid grid-cols-3 grid-rows-12 ml-48 mr-48 grid-auto-rows-[50px] gap-6 h-screen grid-container">
            {/* First Box */}
            <div
              className="col-span-1 row-span-5 grid-item"
              style={{
                backgroundImage: "url(/images/tictactoe.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                window.open("https://tic-tac-toe-71d3.onrender.com", "_blank");
              }}
            >
              <div className="box-image"></div>
              <div className="overlay absolute inset-0 flex flex-col justify-center items-center font-extrabold">
                <span className="overlay-text text-3xl">TIC TAC TOE</span>
                <span className="overlay-description text-2xl">Game</span>
              </div>
            </div>

            {/* Second Box */}
            <div
              className="col-span-2 row-span-5 grid-item"
              style={{
                backgroundImage: "url(/images/gallery.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                window.open("https://grid-gallery.onrender.com", "_blank");
              }}
            >
              <div className="box-image"></div>
              <div className="overlay absolute inset-0 flex flex-col justify-center items-center font-extrabold">
                <span className="overlay-text text-3xl">GALLERY GRID</span>
                <span className="overlay-description text-2xl">Design</span>
              </div>
            </div>
            {/* Third Box */}
            <div
              className="col-span-2 row-span-5 grid-item"
              style={{
                backgroundImage: "url(/images/pokemon.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                window.open(
                  "https://pokemon-cards-ydvi.onrender.com",
                  "_blank"
                );
              }}
            >
              <div className="box-image"></div>
              <div className="overlay absolute inset-0 flex flex-col justify-center items-center font-extrabold">
                <span className="overlay-text text-3xl">POKEMON CARDS</span>
                <span className="overlay-description text-xl">
                  API Integration
                </span>
              </div>
            </div>
            {/* Fourth Box */}
            <div
              className="col-span-1 row-span-12 grid-item"
              style={{
                backgroundImage: "url(/images/tripVault.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                window.open(
                  "https://github.com/MarinnaPereira/trip-vault",
                  "_blank"
                );
              }}
            >
              <div className="box-image"></div>
              <div className="overlay absolute inset-0 flex flex-col justify-center items-center font-extrabold">
                <span className="overlay-text text-3xl">TRIPVAULT</span>
                <span className="overlay-description text-2xl">App</span>
              </div>
            </div>
            {/* Fifth Box */}
            <div
              className="col-span-2 row-span-7 grid-item"
              style={{
                backgroundImage: "url(/images/todo-list.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => {
                window.open("https://to-do-list-nqdd.onrender.com", "_blank");
              }}
            >
              <div className="box-image"></div>
              <div className="overlay absolute inset-0 flex flex-col justify-center items-center font-extrabold">
                <span className="overlay-text text-3xl">TO-DO-LIST</span>
                <span className="overlay-description text-2xl">
                  Functionality
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
