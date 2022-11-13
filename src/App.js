import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/logout' element={<h1>logout</h1>}/>
        <Route path='/profile' element={<h1>profile</h1>}/>
        </Route>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
