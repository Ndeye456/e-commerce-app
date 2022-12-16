import './App.css';
import "react-toastify/dist/ReactToastify.css"; 
import Home from './components/Home'
import About from './components/About';
import Product from './components/Product';
import { Routes, Route,BrowserRouter  } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Header from '../src/components/Header.jsx'
import Footer from './components/Footer';
import Annoncement from './components/Annoncement';
import Contact from './components/Contact';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import UserProfil from './components/UserProfil';
import Payment from './components/Payment';
//import PrivateRoute from './components/admin/PrivateRoute';
//import AdminNavbar from './components/admin/AdminNavbar';

import AddProducts from './components/admin/AddProducts';
import AllProducts from './components/admin/AllProducts';
import Dashboard from './components/admin/Dashboard';
import Layout from './components/admin/Layout';

// import Sidebar from './components/buttons/Sidebar';
// import Pagehome from './components/admin/Pagehome';
// import UserList from './components/admin/UserList';



function App() {
  return (
    <BrowserRouter>
     <>
    <Annoncement/>
     <Header/>
     <Routes>
        
     <Route path='/' element={<Home/>} />
     <Route path='products' element={<Product/>} />
     <Route path='/api/products/:id' element={<ProductDetail/>} />
     <Route path='/cart/' element={<Cart/>} />
     <Route path='/checkout' element={<Checkout/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/about' element={<About/>} />
     {/* <Route path='/admin' element={<AdminNavbar/>} /> */}
     <Route path='/Login' element={<Login/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/profil' element={<UserProfil/>} />
     <Route path='/payment' element={<Payment/>} />
     
     <Route path='/dashboard/all-products' element={<AllProducts/>}/>
      <Route path='/dashboard/add-products' element={<AddProducts/>}/>
      <Route path='/dashboard/add-products' element={<Layout/>}/>
      
      
     
    <Route path='/dashboard' element={<Dashboard/>}>
      
      </Route>
  </Routes>
     <Footer/>

    </>
    </BrowserRouter>
  );
}

export default App;