import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Layout from './components/Layouts/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import LearnHooks from './components/Moduls/LearnHooks';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='/' element={<About/>} />
        <Route path='/LearnHooks' element={<LearnHooks/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;