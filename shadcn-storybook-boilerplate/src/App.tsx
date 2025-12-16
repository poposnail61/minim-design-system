import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeistLayout from "@/components/layout/GeistLayout";
import { Typography } from "@/pages/Typography";
import { Home } from "@/pages/Home";

// Placeholder for component pages
function ComponentPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50" />
    </div>
  )
}

function App() {
  return (
    <Router>
      <GeistLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/components/:name" element={<ComponentPage />} />
        </Routes>
      </GeistLayout>
    </Router>
  );
}

export default App;
