import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
          <Route path='/home'  element={<Home />} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
