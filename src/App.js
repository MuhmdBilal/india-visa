
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar/Navbar';
import ToBavbar from './component/ToNavbar/ToBavbar';
import AboutUs from './component/Aboutus/AboutUs';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import IndianVisa from './component/IndianVisa/IndianVisa';
import OtherCountryVisa from './component/OtherCountryVisa/OtherCountryVisa';
import Slider from './component/Slider/Slider';
import IndianPassport from './component/IndianPassport/IndianPassport';
import OCIcard from './component/OCIcard/OCIcard';
import Renunication from './component/Renunication/Renunication';
import PowerOfAttorneys from './component/PowerOfAttorneys/PowerOfAttorneys';
import PanCard from './component/PanCard/PanCard';
import UsPassport from './component/UsPassport/UsPassport';
import Contact from "./component/Contactus/Contact"
function App() {
  return (
    <div className="App">
      {/* <Slider/> */}
      <BrowserRouter>
      <ToBavbar/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<AboutUs/>}/>
      <Route path="/indianvisa" element={<IndianVisa/>}/>
      <Route path="/othercountryvisa" element={<OtherCountryVisa/>}/>
      <Route path='/indianpassport' element={<IndianPassport/>}/>
      <Route path="/ocicard" element={<OCIcard/>}/>
      <Route path="/renunication" element={<Renunication/>} />
      <Route path='/powerofattorneys' element={<PowerOfAttorneys/>}/>
      <Route path="/pencard" element={<PanCard/>}/>
      <Route path='/UsPassport' element={<UsPassport/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
