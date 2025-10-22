import {Facebook, Instagram, Mail, Phone, Youtube} from 'lucide-react';
import {galleryData} from "./GallerySection.tsx";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src='/LogoVivid.JPG' width={50} height={50} alt='Logo' className='rounded-full ' />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent">
                  Vivid Colors
                </h3>
                <p className="text-xs text-gray-400 -mt-1">Studio</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transformăm momente în amintiri eterne prin fotografie și videografie profesională.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-sm">
              {galleryData.map((item) => (
                <li key={item.id}><a href={item.href} className="hover:text-amber-400 transition-colors">{item.shortTitle}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+40 729 601 720</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>contact@vividcolors.ro</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Urmărește-ne</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/vivid_colo_studio.ro/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Conectează-te cu noi pe social media pentru inspirație zilnică și behind-the-scenes.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Vivid Colors Studio. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
