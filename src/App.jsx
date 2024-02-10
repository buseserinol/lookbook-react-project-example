import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/pages/MainPage";
import ProductsPage from "./components/pages/ProductsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProductDetail from "./components/pages/ProductDetail";
import CategoryPage from "./components/pages/CategoryPage";
function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductsPage />} />
          <Route path="/ürün/:id" element={<ProductDetail />} />

          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>}></Route>
            <Route path="roman" element={<h1>ROMAN</h1>}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
