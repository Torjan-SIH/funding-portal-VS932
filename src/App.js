import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Events from './pages/events';
import Login from './pages/login';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Register from './pages/register';
import ForgotPasswd from './pages/forgotpasswd';
import Header from './components/HeaderFooter/header';
import Footer from './components/HeaderFooter/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <Footer/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgotpasswd' element={<ForgotPasswd/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
