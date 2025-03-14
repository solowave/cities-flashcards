import { HashRouter, Routes, Route } from "react-router-dom";
import FlagsDataProvider from "./contexts/FlagsDataContext";
import { Dashboard } from "./pages/Dashboard";
import { CountryFlags } from "./pages/CountryFlags";
import { Learn } from "./pages/Learn";
import { Quiz } from "./pages/Quiz";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <FlagsDataProvider>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/country/:countryName" element={<CountryFlags />} />
            <Route path="/country/:countryName/learn" element={<Learn />} />
            <Route path="/country/:countryName/quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </FlagsDataProvider>
  );
}

export default App;
