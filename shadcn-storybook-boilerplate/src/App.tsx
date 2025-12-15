import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Typography } from "./pages/Typography";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "bg-secondary text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted/50";
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card hidden md:block shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold tracking-tight">Minim</h2>
          <p className="text-xs text-muted-foreground">Design System</p>
        </div>
        <nav className="px-4 space-y-1">
          <Link to="/" className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors ${isActive('/')}`}>
            Components Demo
          </Link>
          <Link to="/typography" className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-colors ${isActive('/typography')}`}>
            Typography
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-8 max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typography" element={<Typography />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
