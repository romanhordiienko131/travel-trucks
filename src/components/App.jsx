import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import Header from "./Header/Header";
import CamperDetailsPage from "../pages/CamperDetailsPage/CamperDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:camperId" element={<CamperDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
