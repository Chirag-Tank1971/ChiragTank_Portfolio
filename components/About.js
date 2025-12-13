export default function About() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'C#', 'C++', 'OOPs',
    'TailWind Css', 'Node.Js', 'Express.Js', 'APIs', 'AI',
    'GIT', 'MongoDB', 'Sql', 'SASS'
  ];

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hey! It&apos;s
                <strong> CHIRAG TANK</strong>
                and I&apos;m a <strong> Full-Stack Web Developer </strong> located in
                Jaipur.
                I am a enthusiastic and detail-oriented Web Developer with foundational knowledge in HTML, CSS, and JavaScript. <br /> Recently completed a comprehensive <strong>Web Development</strong> course where I gained hands-on experience in building <strong>Responsive</strong> and <strong>User-Friendly</strong> websites.
              </p>
              <p className="about__content-details-para">
                I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <strong>Contact</strong> me.
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn--med btn--theme dynamicBgClr"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {skills.map((skill, index) => (
                <div key={index} className="skills__skill">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

