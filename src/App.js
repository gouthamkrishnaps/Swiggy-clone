import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './pages/Home';
import Header from './components/Header';
import requests from './request';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home />}/>
    </Routes>
    <About/>
    </div>
  );
}

export default App;
