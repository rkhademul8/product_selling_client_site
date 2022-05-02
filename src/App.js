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
import UpdateProduct from './components/Dashboard/UpdateProductModal/UpdateProduct';
import Contact from './components/Contact/Contact';
import Footer from './components/Shared/Footer/Footer';
import CheckoutForm from './components/Dashboard/Payment/CheckoutForm';


function App() {
  return (
    <div >

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
            <Route path='/dashboard/update/:updateId' element={<UpdateProduct />} />
            <Route path='/dashboard/productlist' element={<ProductList />} />
            <Route path='/dashboard/checkout' element={<CheckoutForm />} />
            
          </Route>

          <Route exact path='/'  element={<Home />} />
          <Route path='/home'  element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />



         


          <Route path='/login'  element={<Login />} />
          <Route path='/register'  element={<Register />} />
      </Routes>

    </BrowserRouter>
    
    </AuthProvider>
     
    </div>
  );
}

export default App;
