import "../skills/skills.css";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      percentage: "95%",
      logo: "./src/images/logos/html.png",
      width: "w-8 h-8",
    },
    {
      name: "TypeScript",
      percentage: "70%",
      logo: "./src/images/logos/typescript.png",
      width: "w-6 h-6",
    },
    {
      name: "CSS",
      percentage: "95%",
      logo: "./src/images/logos/css.png",
      width: "w-9 h-9",
    },
    {
      name: "Node.js",
      percentage: "85%",
      logo: "./src/images/logos/nodejs.png",
      width: "w-6 h-6",
    },
    {
      name: "JavaScript",
      percentage: "85%",
      logo: "./src/images/logos/js.png",
      width: "w-6 h-6",
    },
    {
      name: "Express",
      percentage: "85%",
      logo: "./src/images/logos/express.png",
      width: "w-7 h-7",
    },
    {
      name: "React.js",
      percentage: "90%",
      logo: "./src/images/logos/react.png",
      width: "w-7 h-7",
    },
    {
      name: "MongoDB",
      percentage: "80%",
      logo: "./src/images/logos/mongoDB.png",
      width: "w-9 h-9",
    },
    {
      name: "React Native",
      percentage: "70%",
      logo: "./src/images/logos/reactNative.png",
      width: "w-7 h-7",
    },
  ];

  const [progressWidths, setProgressWidths] = useState(
    skillsData.map(() => "0%")
  );
  const progressBarRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      progressBarRefs.current.forEach((ref, index) => {
        const sectionPosition = ref.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
          setProgressWidths((prevWidths) => {
            const newWidths = [...prevWidths];
            newWidths[index] = skillsData[index].percentage;
            return newWidths;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <div id="skillsSection" className="filter">
          <h2 className="text-6xl pt-32 ml-48 titleSkills">Skills</h2>
          <section
            className="skills-section pt-24 pr-0 pb-96 relative"
            id="skills"
          >
            <div className="container pr-20 pl-20 mr-auto ml-auto">
              <div className="skills-items mt-30 flex flex-wrap justify-between gap-20">
                {skillsData.map((skill, index) => (
                  <div
                    key={index}
                    className="skills-item"
                    ref={(el) => (progressBarRefs.current[index] = el)}
                  >
                    <div className="skills-info">
                      <div className="flex items-center">
                        <img
                          className={`${skill.width} mr-2`}
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                        />
                        <p className="skillsP ">{skill.name}</p>
                      </div>
                      <p className="skillsP ">{skill.percentage}</p>
                    </div>
                    <div
                      className="progress-line"
                      data-percent={skill.percentage}
                    >
                      <span
                        className="skills-span "
                        style={{ width: progressWidths[index] }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
