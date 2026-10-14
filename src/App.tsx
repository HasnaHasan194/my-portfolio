import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import LuxuryPreloader from './components/LuxuryPreloader';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Interactive magnetic cursor aura inspired by Adam Kiser */}
        <CustomCursor />

        {/* Luxury entrance preloader inspired by Pheeqoh */}
        <LuxuryPreloader />

        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-green/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fluorescent-lime/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        {/* All content is unified on the home page with no top navbar */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            {/* Fallback routes for bookmarks/external links smoothly scroll to section */}
            <Route path="/about" element={<Home initialSection="about" />} />
            <Route path="/projects" element={<Home initialSection="projects" />} />
            <Route path="/skills" element={<Home initialSection="skills" />} />
            <Route path="/contact" element={<Home initialSection="contact" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
