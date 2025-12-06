import './Header.css';

const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: (targetElement as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header>
      <h1>
        Kian Angelo Florendo
      </h1>
      <nav>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a>
        <a href="#alab-hero" onClick={(e) => scrollToSection(e, '#alab-hero')}>Featured</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
