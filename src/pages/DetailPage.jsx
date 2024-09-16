import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getOnePokemon, imageUrl } from '../utils/api'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../store/feature/favoritesSlice';
import { toast } from "react-toastify";

export default function DetailPage() {

    const { id } = useParams();
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    
    const getData = async () => {
        try {
            const res = await getOnePokemon(id);
            console.log("res getDealerBids", res.data);
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const UrlForImage = imageUrl()

    const handleAddFavorite = () => {
        if (favorites.find(fav => fav._id === data._id)) {
            toast.info("This Pokémon is already in your favorites!");
            return;
        }

        dispatch(addFavorite(data));
        toast.success("Added to favorites!");
    };

    return (
        <>
            <Navbar />
            <main className="main">
                <div className="car-area bg py-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="">
                                    <img src={UrlForImage + data?.image} alt="image" />
                                </div>
                                <div className="row">
                                    {
                                        data?.gallery?.map((item) => (
                                            <div className="col-4"><img src={UrlForImage + item} alt="" /></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-6">
                                <h1>NAME :- {data?.Name}</h1>
                                <p>Breed :- {data?.breed}</p>
                                <p>Description :- {data?.description}</p>
                                <button onClick={handleAddFavorite} className="btn btn-primary">
                                    Add to favorite
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
