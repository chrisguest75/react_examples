
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="flex h-screen bg-background text-foreground">
        {/* Sidebar */}
        <aside className="w-64 bg-card p-6 border-r border-border flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-6">My App</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="px-4 py-2 rounded hover:bg-accent transition-colors">Home</Link>
            <Link to="/about" className="px-4 py-2 rounded hover:bg-accent transition-colors">About</Link>
            <Link to="/contact" className="px-4 py-2 rounded hover:bg-accent transition-colors">Contact</Link>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
