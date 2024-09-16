import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MyPokemon from '../components/MyPokemon'

export default function MyPokemons() {
    return (
        <>
            <Navbar />
            <main className="main">
                <div className="car-area bg py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="site-heading text-center">
                                    <h3 className="site-title">
                                        My added <span>Pokémon</span>
                                    </h3>
                                    <div className="heading-divider" />
                                </div>
                            </div>
                        </div>
                        <MyPokemon />
                    </div>
                </div>
            </main>
            <Footer />
          
        </>
    )
}
