const CV = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="header-content">
          <h1>Shoaib Akhtar</h1>
          <p className="title">
            Web Developer | Graphic Designer | Video Editor
          </p>
        </div>
      </header>

      <section className="about-section">
        <h2 className="line">About Me</h2>
        <p>
          I am a passionate web developer with a unique blend of skills in
          graphic design and video editing. With a strong foundation in
          front-end and back-end technologies, I specialize in creating
          innovative digital solutions that enhance user experiences. My goal is
          to leverage my creativity and technical skills to build engaging
          websites and applications that help businesses thrive in the digital
          landscape.
        </p>
      </section>

      <section className="contact-info">
        <div className="contact-item">
          <span>📱</span>
          <p>+92 321 7578436</p>
        </div>
        <div className="contact-item">
          <span>📧</span>
          <p>shoaib.akhtar.dev@gmail.com</p>
        </div>
        <div className="contact-item">
          <span>📍</span>
          <p>252/F Faridtown, Sahiwal, Punjab, Pakistan</p>
        </div>
      </section>

      <section className="languages">
        <h2 className="line">Languages</h2>
        <ul>
          <li>English (Intermediate)</li>
          <li>Urdu (Fluent)</li>
          <li>Punjabi (Native)</li>
        </ul>
      </section>

      <section className="experience">
        <h2 className="line">Experience</h2>

        <div className="experience-item">
          <h3>Web Developer</h3>
          <p className="company">Freelancer</p>
          <p className="duration">2023 - Present</p>
          <p>
            In my freelance role, I have developed multiple responsive websites
            using Next.js, HTML, and CSS. My responsibilities include:
          </p>
          <ul>
            <li>
              Collaborating with clients to gather requirements and deliver
              tailored solutions.
            </li>
            <li>
              Implementing SEO best practices to enhance website visibility.
            </li>
            <li>
              Ensuring cross-browser compatibility and mobile responsiveness.
            </li>
            <li>
              Maintaining code quality and implementing best practices in web
              development.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Graphic Designer</h3>
          <p className="company">Brainloggers - London</p>
          <p className="duration">2020 - 2024</p>
          <p>
            As a graphic designer, I was responsible for creating visual content
            for various digital platforms. Key achievements include:
          </p>
          <ul>
            <li>
              Developing branding strategies that increased client engagement by
              30%.
            </li>
            <li>
              Designing promotional materials that effectively communicated the
              brand message.
            </li>
            <li>
              Collaborating with marketing teams to deliver cohesive campaigns.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Video Editor</h3>
          <p className="company">Brainloggers - London</p>
          <p className="duration">2022 - 2024</p>
          <p>
            I contributed to creating compelling video content for marketing and
            promotional purposes. Responsibilities included:
          </p>
          <ul>
            <li>
              Editing raw footage into polished final products that captured
              audience attention.
            </li>
            <li>
              Implementing feedback from stakeholders to refine content and
              ensure alignment with goals.
            </li>
            <li>
              Managing project timelines and deadlines to deliver high-quality
              videos promptly.
            </li>
          </ul>
        </div>
      </section>

      <div className="two-column">
        <section className="expertise">
          <h2 className="line">Expertise</h2>
          <ul>
            <li>Proficient in HTML, CSS, JavaScript, and Next.js</li>
            <li>Front-end & Back-end Development (Node.js, Express)</li>
            <li>Social Media Marketing & Content Creation</li>
            <li>Strong Analytical and Critical Thinking Skills</li>
            <li>
              Experienced in Adobe Creative Suite (Photoshop, Illustrator,
              Premiere Pro)
            </li>
          </ul>
        </section>

        <section className="education">
          <h2 className="line">Education</h2>
          <h3>University of Sahiwal</h3>
          <p>BS in Computer Science (BSCS)</p>
          <p className="duration">2020 - 2024</p>
          <p>
            During my studies, I focused on software development, web
            technologies, and graphic design, completing various projects that
            honed my skills and prepared me for a career in technology.
          </p>
        </section>
      </div>

      <section className="skills">
        <h2 className="line">Skills Summary</h2>
        <div className="skill-item">
          <p>Graphic Design</p>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "85%" }}></div>
          </div>
          <span>85%</span>
        </div>
        <div className="skill-item">
          <p>Video Editing</p>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "80%" }}></div>
          </div>
          <span>80%</span>
        </div>
        <div className="skill-item">
          <p>Web Development</p>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: "60%" }}></div>
          </div>
          <span>60%</span>
        </div>
      </section>

      <section className="projects">
        <h2 className="line">Selected Projects</h2>
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>
            Developed a personal portfolio website using Next.js and Tailwind
            CSS, showcasing my work as a web developer and designer. Implemented
            responsive design principles to ensure optimal viewing on all
            devices.
          </p>
        </div>
        <div className="project-item">
          <h3>E-commerce Web App</h3>
          <p>
            Collaborated on a full-stack e-commerce application, integrating
            payment gateways and creating user-friendly interfaces. Utilized
            React for the front end and Node.js for the back end.
          </p>
        </div>
      </section>

      <section className="certifications">
        <h2 className="line">Certifications</h2>
        <ul>
          <li>Certified Web Developer - XYZ Institute (2023)</li>
          <li>Graphic Design Fundamentals - Online Course (2022)</li>
          <li>Video Editing Pro - ABC Academy (2021)</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
