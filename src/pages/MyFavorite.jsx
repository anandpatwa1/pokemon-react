import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FavCard from '../components/FavCard';

export default function MyFavorite() {
    const favorites = useSelector((state) => state.favorites);
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
                                        My favorite <span>Pokémon</span>
                                    </h3>
                                    <div className="heading-divider" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {favorites.length > 0 ? (
                                favorites.map((item) => (
                                    <FavCard key={item.id} item={item} />
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p>No favorites Found!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
