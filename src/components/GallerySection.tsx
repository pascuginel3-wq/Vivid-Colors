import {Camera, Heart, Home, PartyPopper, Sparkles, Video} from 'lucide-react';
import {getEventTypeImages} from "../utils/photoLoader.ts";
import {Link} from "react-router-dom";

interface GallerySectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function GallerySection({ id, title, subtitle, description, icon, gradient }: GallerySectionProps) {
  const images = getEventTypeImages(id);

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${gradient} mb-6`}>
            <div className="text-white">
              {icon}
            </div>
          </div>
          <Link to={`/portfolio/${id}`} key={`${id}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {title}
            </h2>
          </Link>
          <p className="text-xl text-amber-600 mb-4 font-medium">{subtitle}</p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">Fotografie #{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const galleryData = [
  {
    id: 'nunti',
    title: 'Nunți de Vis',
    subtitle: 'Unde două inimi devin una',
    description: 'Fiecare nuntă este o poveste unică de dragoste. Surprindem fiecare privire, fiecare zâmbet și fiecare lacrimă de fericire. De la pregătiri la primul dans, documentăm fiecare moment magic al zilei tale speciale.',
    icon: <Heart className="w-8 h-8" />,
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    id: 'evenimente',
    title: 'Evenimente & Petreceri',
    subtitle: 'Energia momentului, capturată perfect',
    description: 'De la petreceri corporative la aniversări spectaculoase, capturăm atmosfera și energia fiecărui eveniment. Fotografiile noastre aduc la viață bucuria, râsetele și momentele spontane care fac fiecare petrecere memorabilă.',
    icon: <PartyPopper className="w-8 h-8" />,
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'majorate',
    title: 'Majorate & Botezuri',
    subtitle: 'Momentele care definesc o viață',
    description: 'Tranziția către maturitate și începutul unei noi călătorii spirituale sunt momente de o importanță imensă. Capturăm eleganța, emoția și semnificația acestor evenimente speciale care marchează etape importante în viața unei persoane.',
    icon: <Sparkles className="w-8 h-8" />,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'portrete',
    title: 'Portrete Profesionale',
    subtitle: 'Esența ta, într-o imagine',
    description: 'Un portret profesional spune o poveste despre cine ești. Fie că ai nevoie de fotografii corporative, portrete artistice sau ședințe foto personale, aducem la lumină personalitatea și caracterul unic al fiecărei persoane.',
    icon: <Camera className="w-8 h-8" />,
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'filmari_drona',
    title: 'Filmări cu Drona',
    subtitle: 'Perspective care îți taie răsuflarea',
    description: 'Combinăm videografia cinematică cu filmări aeriene spectaculoase pentru a crea conținut video care captivează și inspiră. De la clipuri promoționale la filme de nuntă, oferim o perspectivă completă asupra evenimentului tău.',
    icon: <Video className="w-8 h-8" />,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'imobiliare',
    title: 'Imobiliare',
    subtitle: 'Prezintă-ți proprietatea în cea mai bună lumină',
    description: 'Fotografia imobiliară profesională care vinde. Capturăm arhitectura, designul și atmosfera fiecărei proprietăți pentru a atrage potențiali cumpărători și a maximiza valoarea investiției tale.',
    icon: <Home className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
  },
];

 export const galleryDataById = galleryData.reduce((acc, crt) => {
   acc[crt.id] = crt;
   return acc;
}, {} as Record<string, GallerySectionProps>)
