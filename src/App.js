import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import women_banner from "../src/Assets/women's_banner.jpg"
import men_banner from "../src/Assets/men_banner.webp"
import kids_banner from "../src/Assets/kids_banner.webp"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/men' element={<HomeCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<HomeCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<HomeCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginSignup' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
