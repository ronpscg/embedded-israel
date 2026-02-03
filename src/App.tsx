import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { About } from './pages/About';
import { Training } from './pages/Training';
import { Recordings } from './pages/Recordings';
import { CircuitBackground } from './components/CircuitBackground';

function App() {
    return (
        <Router basename={(import.meta as any).env.BASE_URL}>
            <CircuitBackground />
            <div className="relative min-h-screen bg-transparent text-white selection:bg-primary/30">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/training" element={<Training />} />
                        <Route path="/recordings" element={<Recordings />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
