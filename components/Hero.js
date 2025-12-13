import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, i&apos;m Chirag Tank</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            A Web Developer Crafting dynamic, responsive, and user-centric web applications with a seamless blend of front-end finesse and back-end robustness.
          </p>
        </div>
        <div className="add">
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg>
              <use xlinkHref="#fileIcon"></use>
            </svg>
          </a>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('projects');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg>
              <use xlinkHref="#imageIcon"></use>
            </svg>
          </a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg>
              <use xlinkHref="#mailIcon"></use>
            </svg>
          </a>
          <a href="#">
          </a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol xmlns="https://cdn.iconscout.com/icon/premium/png-512-thumb/svg-inkscape-file-document-extension-filetype-39849.png?f=webp&w=256" viewBox="0 0 24 24" id="fileIcon">
            <path stroke="none" d="M14,0H3A1,1,0,0,0,2,1V23a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8H15a1,1,0,0,1-1-1ZM5,17H19v2H5Zm0-5H19v2H5Zm6-3H5V7h6Z"></path>
            <polygon stroke="none" points="21.414 6 16 6 16 0.586 21.414 6"></polygon>
          </symbol>
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="imageIcon">
            <circle stroke="none" cx="9" cy="8" r="2"></circle>
            <path stroke="none" d="M23,1H1C0.448,1,0,1.447,0,2v20c0,0.553,0.448,1,1,1h22c0.552,0,1-0.447,1-1V2C24,1.447,23.552,1,23,1z M22,3v12l-5-5l-6,7l-5-4l-4,4V3H22z"></path>
          </symbol>
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mailIcon">
            <path stroke="none" d="M21,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V5A3,3,0,0,0,21,2ZM8.207,15.207l-2.5,2.5a1,1,0,0,1-1.414-1.414l2.5-2.5Zm11.5,2.5a1,1,0,0,1-1.414,0l-2.5-2.5,1.414-1.414,2.5,2.5A1,1,0,0,1,19.707,17.707Zm0-10-7,7a1,1,0,0,1-1.414,0l-7-7A1,1,0,0,1,5.707,6.293L12,12.586l6.293-6.293a1,1,0,1,1,1.414,1.414Z"></path>
          </symbol>
        </svg>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/chirag-tank-72220919b/" className="home-hero__social-icon-link" target="_blank" rel="noreferrer">
            <Image
              src="/assets/png/linkedin-ico.png"
              alt="LinkedIn"
              className="home-hero__social-icon"
              width={28}
              height={28}
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://x.com/ChiragT38130967" className="home-hero__social-icon-link" target="_blank" rel="noreferrer">
            <Image
              src="/assets/png/twitter-ico.png"
              alt="Twitter"
              className="home-hero__social-icon"
              width={28}
              height={28}
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.instagram.com/chirag20_03/"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/png/insta-ico.png"
              alt="Instagram"
              className="home-hero__social-icon"
              width={28}
              height={28}
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://dev.to/chirag_tank" className="home-hero__social-icon-link" target="_blank" rel="noreferrer">
            <Image
              src="/assets/png/icons8-book-50.png"
              alt="Dev.to"
              className="home-hero__social-icon"
              width={28}
              height={28}
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/Chirag23Tank" className="home-hero__social-icon-link" target="_blank" rel="noreferrer">
            <Image
              src="/assets/png/github-ico.png"
              alt="GitHub"
              className="home-hero__social-icon"
              width={28}
              height={28}
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

