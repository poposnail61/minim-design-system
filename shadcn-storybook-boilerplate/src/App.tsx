import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeistLayout from "@/components/layout/GeistLayout";
import { Home } from "@/pages/Home";
import FontsPage from "@/pages/foundations/Fonts";
import IconsPage from "@/pages/foundations/Icons";
import ColorsPage from "@/pages/foundations/Colors";
import TypographyPage from "@/pages/foundations/Typography";
import SizesPage from "@/pages/foundations/Sizes";
import EffectsPage from "@/pages/foundations/Effects";

function ComponentPage() {
  return (
    <div className="flex flex-1 flex-col gap-400 p-1200">
      <div className="flex items-center justify-center min-h-64 rounded-xl border border-dashed border-stroke-neutral bg-bg-neutral text-fg-muted text-body-medium">
        Component coming soon
      </div>
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
