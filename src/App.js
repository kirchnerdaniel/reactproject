import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import All from './pages/All';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/All' element={<All/>}/>
      <Route path='/Search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
