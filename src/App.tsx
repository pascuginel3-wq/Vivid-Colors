import Header from './components/Header';
import {Route, Routes} from "react-router-dom";
import PortfolioEventPage from "./pages/PortfolioEventPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {getAllPhotoEntries, getEventTypeImages} from "./utils/photoLoader.ts";
import {galleryData} from "./components/GallerySection.tsx";
import PortfolioEventTypePage from "./pages/PortfolioEventTypePage.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

const photoEntries = getAllPhotoEntries();

function App() {
  return (
    <div className="min-h-screen">
        <Header />
        <div className="pt-28">
            <Routes>
                <Route path="/" element={<HomePage entries={photoEntries} />} />
                {galleryData
                    .filter((gallery) => getEventTypeImages(gallery.id).length)
                    .map((gallery) => (
                        <Route
                            key={`${gallery.id}`}
                            path={`/portfolio/${gallery.id}`}
                            element={<PortfolioEventTypePage type={gallery.id} />}
                        />
                    ))}
                {photoEntries.map(({ type, event }) => (
                    <Route
                        key={`${type}/${event}`}
                        path={`/portfolio/${type}/${event}`}
                        element={<PortfolioEventPage type={type} event={event} />}
                    />
                ))}
            </Routes>
        </div>
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
