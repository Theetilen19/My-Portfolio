import { useState, useEffect, useRef } from 'react';
import './App.css';
import resume from './assets/resume.pdf';
import profilePhoto from './assets/profile.jpg';
import aboutPhoto from './assets/profile-2.jpg';
import hackathonImage from './assets/hackathon.png';
import tutoringImage from './assets/tutoring.jpg';
import designImage from './assets/project.png';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
};

type Education = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  year: string;
};

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProjectScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 350;
    const gap = 32; // 2rem in pixels
    const newIndex = Math.round(scrollPosition / (cardWidth + gap));
    setCurrentProjectIndex(newIndex);
  };

  const scrollToProject = (index: number) => {
    if (projectsGridRef.current) {
      const container = projectsGridRef.current;
      const cards = container.querySelectorAll('.project-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  const projects: Project[] = [
    {
      id: 1,
      name: 'Hackathon Marathon 2024/2025',
      description: 'Participated in the Technical University of Mombasa Hackathon, developing innovative web solutions with a focus on user experience and performance.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/DevisRogino/hackathon-project',
      image: hackathonImage
    },
    {
      id: 3,
      name: 'Portfolio Website Design',
      description: 'Created visually appealing portfolio websites with modern design principles and responsive layouts.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://devisrogino-designs.example.com',
      github: 'https://github.com/DevisRogino/portfolio-designs',
      image: designImage
    }
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: 'Technical University of Mombasa',
      degree: 'Certification',
      field: 'Frontend Web Development (Hackathon Marathon 2024/2025)',
      year: '2025'
    },
    {
      id: 2,
      institution: 'Online Certification Platform',
      degree: 'Advanced Certification',
      field: 'JavaScript Modern Applications',
      year: '2024'
    },
    {
      id: 3,
      institution: 'Web Development Institute',
      degree: 'Certification',
      field: 'Responsive Web Design',
      year: '2023'
    },
    {
      id: 4,
      institution: 'Technical University of Mombasa',
      degree: 'Information Technology',
      field: 'Undergraduate',
      year: '2021'
    }
  ];

  const technicalSkills = ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX Principles', 'Git', 'Figma'];
  const additionalSkills = ['Graphic Design', 'Tutoring', 'Technical Writing', 'Project Management'];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo">Devis Rogino</a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Devis Rogino</h1>
            <h2>Frontend Developer & Designer</h2>
            <p>I specialize in creating beautiful, responsive, and accessible web interfaces using HTML, CSS, and JavaScript. With a passion for clean code and user-centered design.</p>
            <div className="cta-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href={resume} className="btn btn-outline" download="devis-rogino-resume.pdf">Download Resume</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profilePhoto} alt="Devis Rogino" />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="about section">
        <div className="container">
          <h2 className="section-title dark">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Devis Rogino, a passionate frontend developer with expertise in HTML, CSS, and JavaScript. 
                I recently participated in the Hackathon Marathon 2024/2025 at the Technical University of Mombasa, 
                where I honed my skills in creating innovative web solutions under time constraints.
              </p>
              <p>
                My journey in web development began with a fascination for how code transforms into visually appealing 
                and functional interfaces. I've since dedicated myself to mastering the fundamentals of frontend development 
                while expanding my skills into graphic design and tutoring.
              </p>
              <p>
                When I'm not coding, you can find me creating design assets, mentoring aspiring developers, 
                or exploring new web technologies. I believe in continuous learning and pushing the boundaries 
                of what's possible on the web.
              </p>
            </div>
            <div className="about-image">
              <img src={aboutPhoto} alt="Devis Rogino" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skills-column">
              <h3>Technical Skills</h3>
              <ul>
                {technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-column">
              <h3>Additional Skills</h3>
              <ul>
                {additionalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects section">
        <div className="container">
          <h2 className="section-title dark">My Projects</h2>
          <div 
            className="projects-grid" 
            onScroll={handleProjectScroll}
            ref={projectsGridRef}
          >
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-small">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-outline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="projects-nav">
            {projects.map((_, index) => (
              <div 
                key={index}
                className={`projects-nav-dot ${index === currentProjectIndex ? 'active' : ''}`}
                onClick={() => scrollToProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education section">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="education-timeline">
            {education.map(edu => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-date">{edu.year}</div>
                <div className="timeline-content">
                  <h3>{edu.institution}</h3>
                  <p>{edu.degree} - {edu.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2 className="section-title dark">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>How To Reach Me</h3>
              <p><FaEnvelope /> ronginodevis@gmail.com</p>
              <p><FaPhone /> +254 705 486 939</p>
              <p><FaMapMarkerAlt /> Mombasa, Kenya</p>
              
              <div className="social-links">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://wa.me/254705486939" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Devis Rogino. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a href="#home" className={`back-to-top ${isScrolled ? 'active' : ''}`}>
        ↑
      </a>
    </div>
  );
};

export default App;