
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {About, Home, SingleBlog} from "./pages";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import "./index.css"

function App() {
  return (
  
    <BrowserRouter>
    <div className='min-h-screen'>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = { <About/>} />
        <Route path = "/post/:id" element = {<SingleBlog />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
