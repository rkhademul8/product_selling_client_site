import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Navigation from './components/Shared/Navigation/Navigation';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
function App() {
  return (
    <div className="App">

    <AuthProvider>

    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/login'  element={<Login />} />
          <Route path='/register'  element={<Register />} />
      </Routes>
    </BrowserRouter>
    
    </AuthProvider>
     
    </div>
  );
}

export default App;
