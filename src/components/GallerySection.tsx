import { Camera, Heart, PartyPopper, Video, Home, Sparkles } from 'lucide-react';

interface GallerySectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  images: string[];
  gradient: string;
}

export default function GallerySection({ id, title, subtitle, description, icon, images, gradient }: GallerySectionProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${gradient} mb-6`}>
            <div className="text-white">
              {icon}
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
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
    id: 'weddings',
    title: 'Nunți de Vis',
    subtitle: 'Unde două inimi devin una',
    description: 'Fiecare nuntă este o poveste unică de dragoste. Surprindem fiecare privire, fiecare zâmbet și fiecare lacrimă de fericire. De la pregătiri la primul dans, documentăm fiecare moment magic al zilei tale speciale.',
    icon: <Heart className="w-8 h-8" />,
    gradient: 'from-rose-500 to-pink-600',
    images: [
      'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2788456/pexels-photo-2788456.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'events',
    title: 'Evenimente & Petreceri',
    subtitle: 'Energia momentului, capturată perfect',
    description: 'De la petreceri corporative la aniversări spectaculoase, capturăm atmosfera și energia fiecărui eveniment. Fotografiile noastre aduc la viață bucuria, râsetele și momentele spontane care fac fiecare petrecere memorabilă.',
    icon: <PartyPopper className="w-8 h-8" />,
    gradient: 'from-purple-500 to-indigo-600',
    images: [
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'comingofage',
    title: 'Majorate & Botezuri',
    subtitle: 'Momentele care definesc o viață',
    description: 'Tranziția către maturitate și începutul unei noi călătorii spirituale sunt momente de o importanță imensă. Capturăm eleganța, emoția și semnificația acestor evenimente speciale care marchează etape importante în viața unei persoane.',
    icon: <Sparkles className="w-8 h-8" />,
    gradient: 'from-amber-500 to-orange-600',
    images: [
      'https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2959193/pexels-photo-2959193.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1157394/pexels-photo-1157394.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'portraits',
    title: 'Portrete Profesionale',
    subtitle: 'Esența ta, într-o imagine',
    description: 'Un portret profesional spune o poveste despre cine ești. Fie că ai nevoie de fotografii corporative, portrete artistice sau ședințe foto personale, aducem la lumină personalitatea și caracterul unic al fiecărei persoane.',
    icon: <Camera className="w-8 h-8" />,
    gradient: 'from-teal-500 to-cyan-600',
    images: [
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'videodrone',
    title: 'Video & Dronă',
    subtitle: 'Perspective care îți taie răsuflarea',
    description: 'Combinăm videografia cinematică cu filmări aeriene spectaculoase pentru a crea conținut video care captivează și inspiră. De la clipuri promoționale la filme de nuntă, oferim o perspectivă completă asupra evenimentului tău.',
    icon: <Video className="w-8 h-8" />,
    gradient: 'from-blue-500 to-indigo-600',
    images: [
      'https://images.pexels.com/photos/2876511/pexels-photo-2876511.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2260800/pexels-photo-2260800.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: 'realestate',
    title: 'Real Estate',
    subtitle: 'Prezintă-ți proprietatea în cea mai bună lumină',
    description: 'Fotografia imobiliară profesională care vinde. Capturăm arhitectura, designul și atmosfera fiecărei proprietăți pentru a atrage potențiali cumpărători și a maximiza valoarea investiției tale.',
    icon: <Home className="w-8 h-8" />,
    gradient: 'from-green-500 to-emerald-600',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
];
