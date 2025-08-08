import React, { useEffect } from "react";
import { useState } from "react";
import { useLoginUserMutation } from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const initialState = {
  username: "",
  password: "",
};
function Login() {
  const userData = useSelector((state) => state.authState.userData);
  const [fromLoginValue, setFromLoginValue] = useState(initialState);

  const { username, password } = fromLoginValue;
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handel
  const handelChange = (e) => {
    setFromLoginValue({ ...fromLoginValue, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    await loginUser(fromLoginValue);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("User Login Successfully");
      dispatch(
        setCredentials({ token: loginData.token, user: loginData.user })
      );
      navigate("/home");
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isLoginError) {
      toast.error(loginError.data.detail);
    }
  }, [isLoginError]);
  if (userData) {
    // إذا المستخدم مسجل دخول بالفعل، نوجهه مباشرة للصفحة الرئيسية
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="container flex-grow-1 d-flex justify-content-center align-items-center py-5">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
            <form>
              <div className="mb-3">
                <label for="username" className="form-label fw-medium">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="username"
                  placeholder="Enter your username"
                  required
                  name="username"
                  value={username}
                  onChange={handelChange}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label fw-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={password}
                  onChange={handelChange}
                />
              </div>
              <p className="text-decoration-underline text-muted small">
                Forgot password?
              </p>
              <button
                type="submit"
                className="btn btn-warning w-100 fw-bold"
                onClick={handelSubmit}
              >
                Login
              </button>
            </form>
            <p className="text-center mt-3 text-muted">
              Don't have an account?
              <a href="/register" className="text-decoration-none fw-medium">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
