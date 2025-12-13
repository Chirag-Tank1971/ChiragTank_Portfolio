import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chirag-tank-72220919b/">
                <Image
                  className="main-footer__icon"
                  src="/assets/png/linkedin-ico-2.png"
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/Chirag23Tank">
                <Image
                  className="main-footer__icon"
                  src="/assets/png/github-ico-2.png"
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://x.com/ChiragT38130967">
                <Image
                  className="main-footer__icon"
                  src="/assets/png/twitter-ico-2.png"
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://dev.to/chirag_tank">
                <Image
                  className="main-footer__icon"
                  src="/assets/png/dev.png"
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/chirag20_03/">
                <Image
                  className="main-footer__icon main-footer__icon--mr-none"
                  src="/assets/png/insta-ico-2.png"
                  alt="icon"
                  width={25}
                  height={25}
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Chirag Tank</h4>
            <p className="main-footer__short-desc">
              A Full-Stack Web Developer building the Websites and Web Applications that leads to the success of the overall product
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright 2021. Made by
          <a rel="noreferrer" target="_blank" href="#">
            Chirag Tank
          </a>
        </div>
      </div>
    </footer>
  );
}

