import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Grupos from './pages/Grupos';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
        <Header />
        
        {/* O container das rotas ocupa o espaço entre o header e o footer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grupos" element={<Grupos />} />
            {/* Futuramente: <Route path="/cronograma" element={<Cronograma />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;