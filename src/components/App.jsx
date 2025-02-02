import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("../pages/CamperDetailsPage/CamperDetailsPage")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:camperId" element={<CamperDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
