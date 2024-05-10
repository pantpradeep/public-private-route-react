import logo from './logo.svg';
import React from 'react';
import './App.css';
import PrivateRoutes from './routes/publicRoute';
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import About from './pages/about';
import Login from './pages/login';
import Cookies from 'universal-cookie';
function App() {
  const navigate = useNavigate();
  const cookie = new Cookies()
  const [isLogin,setIsLogin] = React.useState(cookie.get('isLogin')?cookie.get('isLogin'):false )
  React.useEffect(() => {
    // Redirect to about page if user is logged in
    if (isLogin) {
      navigate('/about');
    }
  }, [isLogin]);
  return (
      
        <Routes>
          <Route path="/login" element={<Login setIsLogin={setIsLogin}/>}/>
          <Route  exact path='/about' element={<PrivateRoutes component={About} isLogin={isLogin} />}/>
        </Routes>
    
  );
}

export default App;
