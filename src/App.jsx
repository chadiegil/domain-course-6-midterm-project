import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Teachers from "./pages/Teachers";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Dashboard from "./pages/Dashboard";
import Grades from "./pages/Grades";
import Records from "./pages/Records";
import VenueSinglePage from "./view/VenueSinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/records" element={<Records />} />

            <Route path="/api/venues/:id" element={<VenueSinglePage />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
