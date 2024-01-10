
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home'
import Nav from './components/nav'
import Sam from './components/Assets/sam';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sam" element={<Sam/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
