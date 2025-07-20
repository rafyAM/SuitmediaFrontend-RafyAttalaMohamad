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
    <header className={`fixed top-0 w-full h-24 z-50 flex transition-all duration-300 ${show ? 'bg-orange-500 backdrop-blur-md' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        <Image
          src="/images/site-logo.webp"
          alt="Suitmedia Logo"
          width={100}
          height={40}
          className='brightness-0 invert'
          />
        <ul className="flex items-center font-medium text-white text-lg gap-4 ">
          <li>Work</li>
          <li>About</li>
          <li>Services</li>
          <li className="underline">Ideas</li>
          <li>Culture</li>
          <li>Careers</li>
        </ul>
      </div>
    </header>
  );
}