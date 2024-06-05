import "../About/about.css";
import myImage from "/images/cv.jpg";

const AboutPage = () => {
  return (
    <div
      id="aboutSection"
      className="flex flex-grow-0 justify-start flex-row-reverse items-center filter-about min-h-screen "
    >
      <div className=" w-1/3 mx-6 mr-20">
        <h2 className="text-6xl mt-36 titleAbout">About</h2>
        <br />
        <p className="text-2xl mt-4 mb-16 text-justify tracking-wider contentAbout">
          Greetings, Earthlings! I'm Depy, your friendly neighborhood web
          development wizard, here to sprinkle a little magic onto your digital
          endeavors.
          <br />
          <br />
          Ever wonder what happens when you mix a dash of marketing mojo with a
          hefty dose of tech savvy? Well, you get me—a full-stack web developer
          extraordinaire with a knack for turning ideas into digital gold.
          <br />
          My journey into the world of web development wasn't exactly your
          typical tale. It involved a fair amount of curiosity, a sprinkle of
          risk-taking, and a whole lot of caffeine. But hey, isn't that how all
          the best stories start?
          <br />
          <br />
          Beyond the pixels and code, I'm all about promoting a positive work
          environment and championing diversity like it's going out of style.
          Because let's face it, the digital landscape could use a little more
          love and understanding.
          <br />
          <br />
          So, if you're ready to embark on a digital adventure filled with
          creativity, collaboration, and maybe a few corny jokes along the way,
          I'm your guy! Coding with a dash of humor – because laughter is the
          best debugging tool.
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
