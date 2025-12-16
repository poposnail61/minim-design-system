import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import GeistLayout from "@/components/layout/GeistLayout";
import { Home } from "@/pages/Home";
import FontsPage from "@/pages/foundations/Fonts";
import IconsPage from "@/pages/foundations/Icons";
import ColorsPage from "@/pages/foundations/Colors";
import TypographyPage from "@/pages/foundations/Typography";
import SizesPage from "@/pages/foundations/Sizes";
import EffectsPage from "@/pages/foundations/Effects";
import { demoRegistry } from "@/components/demos/registry";

// Placeholder for component pages
function ComponentPage() {
  const { name } = useParams();
  const DemoComponent = name ? demoRegistry[name] : null;

  if (DemoComponent) {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow">
          <div className="p-6">
            <DemoComponent />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center">
          <span className="text-muted-foreground">Demo Coming Soon</span>
        </div>
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
          <Route path="/foundations/icon" element={<IconsPage />} />
          <Route path="/foundations/font" element={<FontsPage />} />
          <Route path="/foundations/color" element={<ColorsPage />} />
          <Route path="/foundations/typography" element={<TypographyPage />} />
          <Route path="/foundations/size" element={<SizesPage />} />
          <Route path="/foundations/effect" element={<EffectsPage />} />
          <Route path="/components/:name" element={<ComponentPage />} />
        </Routes>
      </GeistLayout>
    </Router>
  );
}

export default App;
