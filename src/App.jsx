import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  Teachers,
  Analytics,
  Comment,
  Dashboard,
  Grades,
  Records,
  Login,
  ErrorPage,
} from "./pages";
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
            <Route path="/login" element={<Login />} />

            <Route path="/venues/:id" element={<VenueSinglePage />} />

            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
