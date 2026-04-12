import { useState, lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Loader from "./components/common/Loader";

const Home = lazy(() => import("./pages/Home"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import FloatingElements from "./components/common/FloatingElements";
import ScrollToTop from "./components/common/ScrollToTop";
import WhatsAppFloating from "./components/common/WhatsAppFloating";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="relative z-0 bg-slate-900 min-h-screen selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
          <CustomCursor />
          <ScrollProgress />
          <FloatingElements />
          <ScrollToTop />
          <WhatsAppFloating />
          <Navbar />
          <main>
            <Suspense fallback={<div className="h-screen bg-slate-900" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<AllProjects />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
