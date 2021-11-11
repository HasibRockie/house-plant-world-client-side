import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Service from "./Pages/Services/Service";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Orders/Orders";
import Review from "./Pages/Review/Review";
import Pay from "./Pages/Pay/Pay";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddProducts from './Pages/Manage/AddProducts';
import Admin from './Pages/Manage/Admin';
import ManageOrders from './Pages/Manage/ManageOrders';
import ManageProducts from './Pages/Manage/ManageProducts';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            {/* <Route path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/placeorder'>
              <PlaceOrder></PlaceOrder>
            </Route> */}

            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route
              exact
              path="/services/:id"
              element={
                <PrivateRoute>
                  <Service />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/placeorder"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/dashboard/orders"
              element={
                <PrivateRoute>
                  <Orders />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/dashboard/pay"
              element={
                <PrivateRoute>
                  <Pay />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/dashboard/review"
              element={
                <PrivateRoute>
                  <Review />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/manage/add"
              element={
                <AdminRoute>
                  <AddProducts />
                </AdminRoute>
              }
            />
            <Route
              exact
              path="/manage/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
            <Route
              exact
              path="/manage/orders"
              element={
                <AdminRoute>
                  <ManageOrders />
                </AdminRoute>
              }
            />
            <Route
              exact
              path="/manage/products"
              element={
                <AdminRoute>
                  <ManageProducts />
                </AdminRoute>
              }
            />

            <Route path='*' element={<NotFound />} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
