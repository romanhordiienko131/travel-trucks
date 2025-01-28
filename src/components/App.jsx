import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
      </Routes>
    </>
  );
}

export default App;
