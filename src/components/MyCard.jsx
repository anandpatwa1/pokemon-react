import React from "react";
import { DeleteMyData, imageUrl } from "../utils/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyCard = ({ item, getData }) => {
  const modalId = `modal-${item?._id}`;

  const UrlForImage = imageUrl()

  const deleteData = async () => {
    try {
      const res = await DeleteMyData(item?._id);
      toast.success("Deleted successful!");
      getData()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <>
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="car-item wow fadeInUp" data-wow-delay=".25s">
          <div className="car-img">
            <img alt={item?.Name} src={UrlForImage + item?.image || "assets/img/car/01.jpg"} />
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
                className="btn btn-primary btn-sm">
                <span className="far fa-eye" /> View
              </Link>
              <Link to={`/edit/${item?._id}`}
                className="btn btn-primary btn-sm">
                <span className="far fa-eye" /> Edit
              </Link>
              <Link onClick={deleteData}
                className="btn btn-primary btn-sm">
                <span className="far fa-eye" /> Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCard;