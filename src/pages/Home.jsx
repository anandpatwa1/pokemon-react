import React from "react";
import Footer from "../components/Footer";
import AllPokemon from "../components/AllPokemon";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar/>
      <main className="main">
        <div className="hero-section">
          <div className="">
            <div
              className="hero-single"
              style={{ background: "url(assets/img/poster.jpg)" }}
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12 col-lg-6">
                    <div className="hero-content">
                      <h6
                        className="hero-sub-title"
                        data-animation="fadeInUp"
                        data-delay=".25s"
                      >
                        Welcome To Us!
                      </h6>
                      <h1
                        className="hero-title"
                        data-animation="fadeInRight"
                        data-delay=".50s"
                      >
                        Best Way To show Your <span>Pokémon</span>
                      </h1>
                      <div
                        className="hero-btn"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <Link className="theme-btn" to={'/add-pokemon'}>
                          Add Pokémon
                          <i className="fas fa-arrow-right-long" />
                        </Link>{" "}
                        <Link className="theme-btn theme-btn2" to={'/myPokemon'}>
                          My Pokémon
                          <i className="fas fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-area bg py-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <h2 className="site-title">
                    Here are all <span>Pokémon</span>
                  </h2>
                  <div className="heading-divider" />
                </div>
              </div>
            </div>
            <AllPokemon/>
          </div>
        </div>
        
      </main>
      <Footer/>
    </>
  );
};

export default Home;
