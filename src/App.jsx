import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlagsDataProvider from "./contexts/FlagsDataContext";
import { Dashboard } from "./pages/Dashboard";
import { CountryFlags } from "./pages/CountryFlags";
import { Learn } from "./pages/Learn";
import { Quiz } from "./pages/Quiz";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <FlagsDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/country/:countryName" element={<CountryFlags />} />
            <Route path="/country/:countryName/learn" element={<Learn />} />
            <Route path="/country/:countryName/quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FlagsDataProvider>
  );
}

export default App;
