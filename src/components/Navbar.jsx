import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import { logoutAllUser, logoutUser } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const user = localStorage.getItem("PokemonUser");
  const token = localStorage.getItem("PokemonToken");

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const details = await logoutUser(token);
      localStorage.removeItem("PokemonUser");
      localStorage.removeItem("PokemonToken");
      toast.success("Logout successful!");
      navigate('/');
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Logout failed, please try again."
      );
    }
  };
  const handleAllLogout = async (e) => {
    e.preventDefault();
    try {
      const details = await logoutAllUser(token);
      localStorage.removeItem("PokemonUser");
      localStorage.removeItem("PokemonToken");
      toast.success("Logout successful!");
      navigate('/');
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Logout failed, please try again."
      );
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <div className="header-top-left">
              <div className="header-top-contact">
                <ul>
                  <li>
                    <a href="#">
                      <i className="far fa-envelopes" />{" "}
                      <span
                        className="__cf_email__"
                        data-cfemail="dab3b4bcb59abfa2bbb7aab6bff4b9b5b7"
                      >
                        Pokémon@mail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+21236547898">
                      <i className="far fa-phone-volume" /> +XX XXXXXXXXXX
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top-right">
              {
                token ? <div className="header-top-link">
                  <Link onClick={(e) => handleLogout(e)} >
                    <i className="far fa-arrow-right-to-arc" /> Logout
                  </Link>{" "}
                  <Link onClick={handleAllLogout}>
                  <i className="far fa-arrow-right-to-arc" /> Logout from all device
                  </Link>
                </div> :
                  <div className="header-top-link">
                    <Link to="/signin">
                      <i className="far fa-arrow-right-to-arc" /> Sign In
                    </Link>{" "}
                    <Link to="/signup">
                      <i className="far fa-user-vneck" /> Sign Up
                    </Link>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand" href="index.html">
              <h3
                style={{
                  color: "#000",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                Pokémon
              </h3>
            </a>
            <div className="mobile-menu-right">
              <div className="search-btn">
                <button className="nav-right-link" type="button">
                  <i className="far fa-search" />
                </button>
              </div>
              <button
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="navbar-toggler"
                data-bs-target="#main_nav"
                data-bs-toggle="collapse"
                type="button"
              >
                <span className="navbar-toggler-mobile-icon">
                  <i className="far fa-bars" />
                </span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link"  to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/add-pokemon'}>
                    Add Pokémon
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/myPokemon"} className="nav-link" >
                    My Pokémon
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/favorite"} className="nav-link" >
                    My favorite
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search-area">
              <form action="#">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Type Keyword..."
                    type="text"
                  />{" "}
                  <button className="search-icon-btn" type="submit">
                    <i className="far fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <ToastContainer />
    </header>
  )
}
