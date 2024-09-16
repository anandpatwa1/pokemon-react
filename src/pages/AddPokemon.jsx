import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { addData } from '../utils/api';
import { toast } from "react-toastify";

export default function AddPokemon() {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        description: '',
        image: "",
        gallery: []
    });

    const token = localStorage.getItem("PokemonToken");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' || name === 'gallery') {
            setFormData(prev => ({
                ...prev,
                [name]: files
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error(
              "Logout before add my Pokémon."
            );
            return
        }

        const formDataObject = new FormData();
        formDataObject.append('Name', formData.name);
        formDataObject.append('breed', formData.breed);
        formDataObject.append('description', formData.description);

        if (formData.image) {
            formDataObject.append('image', formData.image[0]); 
        }

        if (formData.gallery) {
            Array.from(formData.gallery).forEach(file => {
              formDataObject.append('gallery', file);
            });
          }

        try {
            await addData(formDataObject);
            toast.success("Added successful!");
            setFormData({
                name: '',
                breed: '',
                description: '',
                image: "",
                gallery: []
            })
            console.log('Data submitted successfully');
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error(error.response.data.error || error?.message);
        }
    };

    return (
        <>
            <Navbar />
            <main className="main">
                <div className="car-area bg py-120">
                    <div className="container">
                        <form className='row' onSubmit={handleSubmit}>
                            <div className="mb-3 col-6">
                                <label htmlFor="Name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="Breed">Breed</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Breed"
                                    name="breed"
                                    value={formData.breed}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 col-12">
                                <label htmlFor="Description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="Image">Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="Image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="Gallery">Gallery</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="Gallery"
                                    name="gallery"
                                    multiple
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
