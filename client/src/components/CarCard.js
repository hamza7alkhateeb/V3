// CarCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <Link
        to={`/car-details/${car.id}`}
        state={{ car }}
        className="card-custom text-decoration-none text-dark"
      >
        <div className="card-custom">
          <img
            src={
              car?.existing_images[0]?.image ||
              "https://via.placeholder.com/400"
            }
            className="w-100"
            alt={car.title}
          />
          <div className="p-3">
            <h5 className="fw-semibold">{car?.title}</h5>
            <p className="typography_body">{car?.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CarCard;
