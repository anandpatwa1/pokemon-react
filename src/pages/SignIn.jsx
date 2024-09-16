import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const details = await signInUser(data);
      console.log(details?.token, "check2");
      console.log(details?.user, "check");

      localStorage.setItem("PokemonUser", JSON.stringify(details?.user));
      localStorage.setItem("PokemonToken", details?.token);
      toast.success("Signin successful!");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      //   console.error(error.response.data.message);
      toast.error(
        error?.response?.data?.message || "Signin failed, please try again."
      );
    }
  };

  useEffect(() => {
    // isLoggedIn ? router.push("/") :''
  }, []);
  return (
    <main className="main">
      <div className="login-area mt-5 mb-5">
        <div className="container">
          <div className="col-md-5 mx-auto">
            <div className="login-form">
              <div className="login-header">
                <h3>Sign In</h3>
                <p>Sign In with your account</p>
              </div>
              <form onSubmit={handleSubmit} action="myaccount" method="post">
                <div className="form-group">
                  <label>Email Address</label>{" "}
                  <input
                    className="form-control"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>{" "}
                  <input
                    className="form-control"
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    value={formData?.password}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className="d-flex justify-content-between mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      id="remember"
                      type="checkbox"
                      defaultValue=""
                    />{" "}
                    <label className="form-check-label" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                  <a className="forgot-pass" href="forgot-password">
                    Forgot Password?
                  </a>
                </div> */}
                <div className="d-flex align-items-center">
                  <button className="theme-btn" type="submit">
                    <i className="far fa-sign-in" /> Sign In
                  </button>
                </div>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
