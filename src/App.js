import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Events from './pages/events';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Register from './pages/register';
import ForgotPasswd from './pages/forgotpasswd';
import Headers from './components/HeaderFooter/header';
import Footers from './components/HeaderFooter/footer';
import Heiexplorer from './pages/hei/heiexplorer';
import Heiprofile from './pages/hei/heiprofile';
import Fundsexplorer from './pages/funds/fundsexplorer';
import Fundsprofile from './pages/funds/fundsprofile';
import Oeprofile from './pages/oe/oeprofile';
import FUNDsidebar from './components/SideBar/FUNDsidebar';
import HEIsidebar from './components/SideBar/HEIsidebar';
import Topbar from './components/TopBar/topbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgotpasswd' element={<ForgotPasswd/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/heiexplorer' element={<Heiexplorer/>} />
          <Route path='/heiprofile' element={<Heiprofile/>} />
          <Route path='/fundsprofile' element={<Fundsprofile/>} />
          <Route path='/fundsexplorer' element={<Fundsexplorer/>} />
          <Route path='/oeprofile' element={<Oeprofile/>} />
          <Route path='/FUNDsidebar' element={<FUNDsidebar/>} />
          <Route path='/HEIsidebar' element={<HEIsidebar/>} />
          <Route path='/topbar' element={<Topbar/>} />
        </Routes>
      </BrowserRouter>
      <Footers/>
    </div>
  );
}

export default App;
