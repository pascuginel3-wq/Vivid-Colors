import { Award, Heart, Users, Zap } from 'lucide-react';

export default function Story() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Povestea Noastră
          </h2>
          <p className="text-xl text-amber-600 mb-4 font-medium">De la pasiune la profesie</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="./DSC07955.jpg"
              alt="Photography studio"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Transformăm momente în amintiri eterne
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
            Vivid Colors Studio s-a născut din dorința de a transforma emoția în artă.
            Fiecare imagine surprinsă reflectă pasiunea noastră pentru echilibru, naturalețe și poveste.
            </p>
           
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Pasiune',
              description: 'Iubim ceea ce facem și se vede în fiecare fotografie',},
            {
              icon: <Award className="w-8 h-8" />,
              title: 'Experiență',
              description: 'O vastă experiență în fotografia profesională.',
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Echipă',
              description: 'Fotografi talentați dedicați excelenței',
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'Inovație',
              description: 'Tehnologie modernă și tehnici creative',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
