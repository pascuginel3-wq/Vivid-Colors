import Header from './components/Header';
import {Route, Routes} from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import {getAllPhotoEntries} from "./utils/photoLoader.ts";

const photoEntries = getAllPhotoEntries();

function App() {
  return (
    <div className="min-h-screen">
        <Header />
        <Routes>
            <Route path="/" element={<HomePage entries={photoEntries} />} />
            {photoEntries.map(({ type, event }) => (
                <Route
                    key={`${type}/${event}`}
                    path={`/portfolio/${type}/${event}`}
                    element={<PortfolioPage type={type} event={event} />}
                />
            ))}
        </Routes>
    </div>
  );
}

export default App;
