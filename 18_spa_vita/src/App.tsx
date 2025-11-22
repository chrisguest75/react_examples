
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dialog from './components/Dialog';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignout, setShowSignout] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  function handleSignout() {
    setShowSignout(false);
    setLoggedIn(false);
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
            <button
              className="px-4 py-2 rounded hover:bg-destructive/80 transition-colors bg-destructive text-destructive-foreground mt-8 font-semibold"
              onClick={() => setShowSignout(true)}
            >
              Sign Out
            </button>
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
        {/* Signout Dialog */}
        <Dialog open={showSignout} onClose={() => setShowSignout(false)}>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2 text-center">Confirm Sign Out</h3>
            <p className="text-center">Are you sure you want to sign out?</p>
            <div className="flex gap-4 justify-center mt-4">
              <button
                className="px-4 py-2 rounded bg-destructive text-destructive-foreground hover:bg-destructive/80 font-semibold"
                onClick={handleSignout}
              >
                Yes, Sign Out
              </button>
              <button
                className="px-4 py-2 rounded bg-muted text-muted-foreground hover:bg-muted/80 font-semibold"
                onClick={() => setShowSignout(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </Router>
  );
}

export default App;
