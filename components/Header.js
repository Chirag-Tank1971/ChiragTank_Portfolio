import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      if (router.pathname !== '/') {
        router.push(`/#${sectionId}`).then(() => {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container" onClick={handleLogoClick}>
          <div className="header__logo-img-cont">
            <Image
              src="/assets/png/ME.png"
              alt="Chirag Tank Logo Image"
              className="header__logo-img"
              width={50}
              height={50}
            />
          </div>
          <span className="header__logo-sub">Chirag Tank</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <Link href="/" className="header__link">Home</Link>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link" onClick={(e) => handleLinkClick(e, '#about')}>
                About
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link" onClick={(e) => handleLinkClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link" onClick={(e) => handleLinkClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <Image
              src="/assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${isMenuOpen ? 'd-none' : ''}`}
              width={30}
              height={30}
            />
            <Image
              src="/assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${!isMenuOpen ? 'd-none' : ''}`}
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${isMenuOpen ? 'header__sm-menu--active' : ''}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link href="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="header__sm-menu-link">
              <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a>
            </li>
            <li className="header__sm-menu-link">
              <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

