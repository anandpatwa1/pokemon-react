import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { signUpUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const { name, email, password, password2, agree } = formData;

    if (!name || !email || !password || !password2) {
      toast.error("All fields are required");
      return false;
    }
    if (password !== password2) {
      toast.error("Passwords do not match");
      return false;
    }
    if (!agree) {
      toast.error("You must accept the Privacy Agreement");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    try {
      const details = await signUpUser(data);
      toast.success("Signup successful!");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Signup failed, please try again."
      );
    }
  };
  return (
    <main className="main">
      <div className="login-area mt-5 mb-5">
        <div className="container">
          <div className="col-md-5 mx-auto">
            <div className="login-form">
              <div className="login-header">
                <h3>Sign Up</h3>
                <p>Create your account</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="password"
                    className="form-control"
                    placeholder="Your Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    name="password2"
                    className="form-control"
                    placeholder="Confirm Your Password"
                    type="password"
                    value={formData.password2}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-check form-group">
                  <input
                    name="agree"
                    className="form-check-input"
                    id="agree"
                    type="checkbox"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    Accept <a href="#">Privacy</a> Agreement
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <button className="theme-btn" type="submit">
                    <i className="far fa-paper-plane" /> Sign Up
                  </button>
                </div>
                <ToastContainer />
              </form>

              <div className="login-footer">
                <p>
                  Already have an account? <a href="signin">Sign In.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
