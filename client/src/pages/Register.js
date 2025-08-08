import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegisterUserMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
      error: registerError,
    },
  ] = useRegisterUserMutation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }
    await registerUser(formData);
    toast.success("Registration successful!");
    navigate("/login");
  };
  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success("User Register Successfully");
      // dispatch(setUser({ userData: registerData }));
      navigate("/login");
    }
  }, [isRegisterSuccess]);

  useEffect(() => {
    if (isRegisterError) {
      toast.error(registerError.data.detail);
    }
  }, [isRegisterError]);

  return (
    <div className="container my-5">
      <div
        className="mx-auto p-4 shadow rounded bg-white"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="text-center fw-bold mb-4">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-medium"> Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-medium">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-medium">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              className="form-control"
              placeholder="Rewrite a  confirm password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">
            Register
          </button>
        </form>
        <p className="text-center mt-3 text-muted">
          Already have an account?
          <a href="/login" className="text-decoration-none fw-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
