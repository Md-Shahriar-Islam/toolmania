import logo from './logo.svg';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Authentication/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Home/Header';
import MyOrders from './components/Dashboard/MyOrders';
import Review from './components/Dashboard/Review'
import Profile from './components/Dashboard/Profile';
import RequireAuth from './components/secured/RequireAuth';
import Notfound from './components/Error/Notfound';
import AddItem from './components/Dashboard/AddItem';
import ToolBox from './components/Home/ToolBox';
import Shopping from './components/Shopping/Shopping';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Business/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route
            path="myorder"
            element={<MyOrders />}
          />
          <Route
            path="review"
            element={<Review />}
          />
          <Route
            path="profile"
            element={<Profile />}
          />
          <Route
            path="add"
            element={<AddItem />}
          />
        </Route>
        <Route path="*" element={<Notfound></Notfound>} />

        <Route path="/shop" element={<Shopping></Shopping>} />
        <Route path="/shop/:id" element={<Shopping></Shopping>} />

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
