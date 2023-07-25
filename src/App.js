import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Themes from "./pages/Themes";
import Demos from "./pages/Demos";
import UploadDemo from "./pages/UploadDemo";
import { QueryClient, QueryClientProvider } from "react-query";
import Admin from "./pages/Admin";

const queryclient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryclient}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/upload-demo" element={<UploadDemo />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
