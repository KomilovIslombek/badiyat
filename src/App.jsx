import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Books from './pages/Books/Books';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NoPage from './pages/NoPage/NoPage';

function App() {
  const navigate  = useNavigate();
  const location = useLocation();
  const register = JSON.parse(window.localStorage.getItem("sign"))
  const [ sign, setSign ] = useState(register);

  useEffect(() => {
      if(register == null) {
          navigate('/login')
      } else if(sign == true && location.pathname == '/login') {
        navigate('/')
      }
  }, [location.pathname]);
  return (
    <div className="App">
      <div className={location.pathname == '/login' ? 'd-none' : ''}>
        <Header />
      </div>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login userSign={sign}/>} />
            <Route path='/books' element={<Books />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </div>
  );
}

export default App;
