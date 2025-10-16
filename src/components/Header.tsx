import { Menu, X } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Acasă', href: '#home' },
    { name: 'Nunți', href: '#weddings' },
    { name: 'Evenimente', href: '#events' },
    { name: 'Majorate', href: '#comingofage' },
    { name: 'Portrete', href: '#portraits' },
    { name: 'Video & Dronă', href: '#videodrone' },
    { name: 'Real Estate', href: '#realestate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="md:max-w-[90%] w-full md:mx-10 px-5 ">
        <div className="flex justify-between gap-10 items-center md:max-w-[90%] w-full py-4">
          <div className="flex items-center space-x-3">
            <img src='/LogoVivid.JPG' width={70} height={70} alt='Logo' className='rounded-full ' />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
                Vivid Colors
                </h1>
                
              <p className="text-xs text-gray-600 -mt-1">Studio</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
