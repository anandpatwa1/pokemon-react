import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllData, getMyData } from "../utils/api";
import Card from "./Card";
import MyCard from "./MyCard";

const MyPokemon = () => {

const token = localStorage.getItem("PokemonToken");

const [list , setList] = useState([])
const getData = async () => {
  if (!token) {
    toast.error(
      "Logout before get my Pokémon."
    );
    return
  }else{
    try {
    const res = await getMyData()
    console.log("res getDealerBids", res.data);
    setList(res?.data)
    } catch (error) {
      console.log(error);
    }
    
  }
  
}

useEffect(() =>{
    getData()
  },[])
    
  return (
    <div className="row">
        {
            list.map((item) => (
                <MyCard key={item._id} item={item} getData={getData} />
            ))
        }
    </div>
  );
};

export default MyPokemon;
