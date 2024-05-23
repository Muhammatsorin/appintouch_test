import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Thang_Noodle } from "./components/Thang_Noodle";
import { Footer } from "./components/Footer";
import { BackToTop } from './components/BackToTop';
import { MangoRiskyRice } from './components/MangoRiskyRice';
import { CornSpicySalad } from './components/Corn_Spicy_Salad';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Thang_Noodle />
      <MangoRiskyRice />
      <CornSpicySalad />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
