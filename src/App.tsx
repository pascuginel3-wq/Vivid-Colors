import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import GallerySection, { galleryData } from './components/GallerySection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      {galleryData.map((gallery) => (
        <GallerySection key={gallery.id} {...gallery} />
      ))}
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
