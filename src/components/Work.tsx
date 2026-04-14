import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Music-Mood-Tune",
    category: "The Intelligent, Emotion-Aware Android Music Player designed to bridge the gap between human emotion and digital entertainment.",
    tools: "Kotlin, Android",
    image: "/images/callhq.png",
    link: "https://github.com/Abubakar477/Music-mood-tune",
  },
  {
    title: "Zombie-Apocalypse-Telltale Survival Game",
    category: "Interactive, choice-based zombie apocalypse game built for Windows. Navigate a story-driven survival experience with branching decisions and multiple outcomes.",
    tools: "C#, .NET Framework",
    image: "/images/whatsapp.png",
    link: "https://github.com/Abubakar477/Zombie-Apocalypse-Telltale-Style-Survival-Game",
  },
  {
    title: "AI-chatbot",
    category: "A C# Windows Forms AI chatbot application that sends user input to an external API using HTTP requests and displays responses.",
    tools: "C#, Newtonsoft.Json, APIs",
    image: "/images/broki.png",
    link: "https://github.com/Abubakar477/AI-chatbot",
  },
  {
    title: "Sonar-system-Rock-and-mine-Detection",
    category: "A sonar-based system using ultrasonic sensors and a microcontroller to detect underwater obstacles like rocks and mines with real-time alerts.",
    tools: "Jupyter Notebook, Python, Sensors",
    image: "/images/orrdr.png",
    link: "https://github.com/Abubakar477/Sonar-system-Rock-and-mine-Detection",
  },
  {
    title: "TCP-CHATROOM",
    category: "A simple client-server chatroom application using TCP sockets that enables real-time text communication between multiple users over a network.",
    tools: "Python, TCP Sockets",
    image: "/images/callhq.png",
    link: "https://github.com/Abubakar477/TCP-CHATROOM",
  },
  {
    title: "Car-Dealer-Website",
    category: "A fully-functional Car Dealer Website built with Django, designed to showcase cars available for sale, manage user accounts, and handle car listings.",
    tools: "Django, Python, Web Development",
    image: "/images/whatsapp.png",
    link: "https://github.com/Abubakar477/Car-Dealer-Website",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
