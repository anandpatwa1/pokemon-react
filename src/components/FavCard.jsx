import React from "react";
import { imageUrl } from "../utils/api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../store/feature/favoritesSlice";

const FavCard = ({ item }) => {
  const dispatch = useDispatch();
  const modalId = `modal-${item?._id}`; 

  const UrlForImage = imageUrl()

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(item));  // Dispatch removeFavorite action
  };

  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="car-item wow fadeInUp" data-wow-delay=".25s">
          <div className="car-img">
            <img alt={item?.Name} src={UrlForImage+item?.image || "assets/img/car/01.jpg"} />
          </div>
          <div className="car-content">
            <div className="car-top">
              <h4>
                <a href="#">{item?.Name}</a>
              </h4>
            </div>
            <ul className="car-list">
              <li>{item?.breed}</li>
            </ul>
            <div className="car-footer">
              <Link to={`/pokemon/${item?._id}`}
                className="btn btn-primary">
                <span className="far fa-eye" /> View
              </Link>
              <button onClick={handleRemoveFavorite}
                className="btn btn-primary">
                <span className="far fa-trash" /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavCard;