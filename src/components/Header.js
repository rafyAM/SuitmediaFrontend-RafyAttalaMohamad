import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShow(currentY < scrollY || currentY < 50);
      setScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header className={`fixed top-0 w-full h-24 z-50 items-center transition-all duration-300 ${show ? 'bg-orange-500 backdrop-blur-md' : '-translate-y-full'}`}>
      <nav className="flex max-w-6xl mx-auto px-10 py-3 justify-between items-center">
        <Image
          src="/images/site-logo.webp"
          alt="Suitmedia Logo"
          width={100}
          height={40}
          className='brightness-0 invert'
        />
        <ul className="flex font-medium gap-4">
          <li>Work</li>
          <li>About</li>
          <li>Services</li>
          <li className="underline">Ideas</li>
          <li>Culture</li>
          <li>Careers</li>
        </ul>
      </nav>
    </header>
  );
}