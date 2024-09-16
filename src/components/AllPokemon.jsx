import React, { useEffect, useState } from "react";
import { getAllData } from "../utils/api";
import Card from "./Card";

const AllPokemon = () => {

  const [list, setList] = useState([])
  const getData = async () => {
    try {
      const res = await getAllData()
      console.log("res getDealerBids", res.data);
      setList(res?.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="row">
      {
        list.map((item) => (
          <Card key={item._id} item={item} />
        ))
      }
    </div>
  );
};

export default AllPokemon;
