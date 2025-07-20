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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${show ? 'bg-white/80 backdrop-blur-md' : '-translate-y-full'}`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Suitmedia</h1>
        <ul className="flex gap-4">
          <li className="text-orange-500 font-medium">Ideas</li>
          <li>Work</li>
          <li>Services</li>
          <li>Culture</li>
          <li>Careers</li>
        </ul>
      </nav>
    </header>
  );
}