import { useState } from 'react';
import './App.css';
import resume from './assets/resume.pdf';
import profilePhoto from './assets/profile.jpeg';
import eLearningImage from './assets/e-learning.jpg';
import taskImage from './assets/taskapp.webp';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      name: 'E-Learning Platform for CBC curriculum',
      description: 'A full-stack e-leraning platform with student authentication, student project view page, and Chat platform for Q & A',
      technologies: ['PHP', 'Laravel', 'MySQL', 'BootStrap'],
      github: 'https://github.com/Theetilen19/ecommerce',
      image: eLearningImage
    },
    {
      id: 2,
      name: 'Task Management Website',
      description: 'A productivity website for managing Student Tasks and project at an affordable Prices.',
      technologies: ['PHP', 'BOOTSTRAP', 'MySql', 'Laravel'],
      link: 'https://taskapp.example.com',
      github: 'https://github.com/Theetilen19/taskapp',
      image: taskImage
    }
  ];

  // Sample education data
  const education: Education[] = [
    {
      id: 1,
      institution: 'Technical University of Mombasa',
      degree: 'Bachelor of Technology',
      field: 'Information Technology (Undergraduate)',
      year: '2025'
    },
    {
      id: 2,
      institution: 'Alison College',
      degree: 'Dynamics of Information',
      field: 'Security Management System (ISMS)',
      year: '2025'
    },
    {
      id: 3,
      institution: 'Code Academy',
      degree: 'Certification',
      field: 'Full Stack Web Development',
      year: '2022'
    },
    {
      id: 4,
      institution: 'Alison College',
      degree: 'Diploma',
      field: 'Ethical Hacking',
      year: '2025'
    }
  ];

  // Skills data
  const technicalSkills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'PHP','MySql'];
  const softSkills = ['Problem Solving', 'Teamwork', 'Communication', 'Time Management'];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#home" className="logo">TheeTilen</a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Tilen Ochieng</h1>
            <h2>Full Stack Developer</h2>
            <p>I am a full-stack developer. I am skilled in building dynamic, responsive web applications from front-end interfaces to robust back-end systems and database management.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href={resume} className="btn btn-outline" download="resume.pdf">Download Resume</a>
            </div>
          </div>
          <div className="hero-image">
  <img src={profilePhoto} alt="Tilen" />
</div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              Hello! I'm Tilen, a passionate full-stack developer with 3 years of hands-on experience building web applications.
               I specialize in PHP and Laravel technologies across the entire stack but am currently working on JavaScript Technologies, including (React.js, Node.js, Express, and MongoDB).
              </p>
              <p>
              My tech journey began in campus first year when I built my first website—an experience that sparked my love for coding. 
              Since then, I've pursued formal education in Information Technology and contributed to diverse projects that sharpened both my frontend and backend skills.
              </p>
              <p>
              I'm currently seeking opportunities to take on challenging projects that fuel my growth as a developer 
              and allow me to deliver impactful, user-focused solutions.
              </p>
            </div>
            <div className="hero-image">
  <img src={profilePhoto} alt="Tilen" />
</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
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
              <h3>Soft Skills</h3>
              <ul>
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
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
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {education.map(edu => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-date">{edu.year}</div>
                <div className="timeline-content">
                  <h3>{edu.institution}</h3>
                  <p>{edu.degree} in {edu.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>How To Reach Me</h3>
              <p><i className="fas fa-envelope"></i> ochiengtilen5@gmail.com</p>
              <p><i className="fas fa-phone"></i> +254 111 324 234</p>
              <p><i className="fas fa-map-marker-alt"></i> Mombasa County, Kenya</p>
              
              <div className="social-links">
                <a href="https://www.linkedin.com/in/thee-tilen-2613322a7" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Theetilen19" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/Master_Tee21?t=xIYXxEOo_AgN5IJ5zx7Ubg&s=09" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/0111324234" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
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
          <p>&copy; {new Date().getFullYear()} Thee Tilen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;