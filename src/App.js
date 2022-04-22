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
import About from './components/About/About';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddProducr from './components/Dashboard/AddProducr/AddProducr';
import Payment from './components/Dashboard/Payment/Payment';
function App() {
  return (
    <div className="App">

    <AuthProvider>

    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>

          <Route path='/dashboard' element={ <Dashboard />} >
           
            <Route path='/dashboard/addProduct' element={<AddProducr />} />
            <Route path='/dashboard/payment' element={<Payment />} />
          </Route>

          <Route exact path='/'  element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/about'  element={<PrivateRoute><About /></PrivateRoute>} />

          <Route path='/login'  element={<Login />} />
          <Route path='/register'  element={<Register />} />
      </Routes>
    </BrowserRouter>
    
    </AuthProvider>
     
    </div>
  );
}

export default App;
