import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/ReactToastify.css";
import Login from "./pages/Login";
import AddCar from "./pages/AddCar";
import CarDetails from "./pages/CarDetails";
import SearchResults from "./pages/SearchResults";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import { useEffect } from "react";
import { setCredentials } from "./features/authSlice";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { jwtDecode } from "jwt-decode";
import { useLazyGetUserQuery } from "./services/authApi";
import EditCar from "./pages/EditCar";
import Filters from "./pages/Filters";
import MyListings from "./pages/MyListings";
import NotFound from "./pages/NotFound";
function App() {
  const dispatch = useDispatch();
  const [triggerGetUser] = useLazyGetUserQuery();

  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const user_id = decoded.user_id;

      triggerGetUser(user_id).then((res) => {
        if (res?.data) {
          dispatch(
            setCredentials({
              user: res.data,
              token,
            })
          );
        }
      });
    }
  }, [token, dispatch, triggerGetUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              token ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addCar" element={<AddCar />} />
            <Route path="/editCar" element={<EditCar />} />
            <Route path="/filters" element={<Filters />} />
            <Route path="/myListings" element={<MyListings />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/searchResults" element={<SearchResults />} />
            <Route path="/NotFound" element={<NotFound />} />
            {/* Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
