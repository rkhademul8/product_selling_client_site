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
import ProductSubmitModal from './components/Home/Modal/ProductSubmitModal';
import UserOrder from './components/Dashboard/UserOrder/UserOrder';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ProductList from './components/Dashboard/ProductList/ProductList';


function App() {
  return (
    <div className="App">

    <AuthProvider>

    <BrowserRouter>
    <Navigation></Navigation>
      <Routes>
          {/* dashboard */}
          <Route path='/dashboard' element={ <Dashboard />} >
           
            <Route path='/dashboard/addProduct' element={<AddProducr />} />
            <Route path='/dashboard/makeadmin' element={<MakeAdmin />}  />
            <Route path='/dashboard/userorder' element={<UserOrder />} />
            <Route path='/dashboard/payment/:orderId' element={<Payment />} />
            <Route path='/dashboard/productlist' element={<ProductList />} />
            
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
