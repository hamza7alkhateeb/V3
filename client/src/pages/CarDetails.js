import React from "react";
import { useParams, useLocation } from "react-router-dom";

function CarDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { car } = location.state || {};
  if (!car) {
    return <p>No details for car ID {id}...</p>;
  }

  const features = car.features ? car.features.split(",") : [];
  const images = Array.isArray(car.existing_images) ? car.existing_images : [];

  return (
    <>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                <h1 className="typography_h1 mb-2">{car.title}</h1>
                <span className="fs-3 fw-bold text-primary">${car.price}</span>
              </div>
              <div className="d-flex flex-wrap gap-3 typography_body mb-4">
                <span>
                  <strong>Model:</strong> {car.model}
                </span>
                <span>
                  <strong>Year:</strong> {car.year}
                </span>
                <span>
                  <strong>Mileage:</strong> {car.mileage} miles
                </span>
                <span>
                  <strong>Fuel:</strong> {car.fuel_type}
                </span>
                <span>
                  <strong>Color:</strong> {car.color}
                </span>
              </div>

              {/* الصور (فقط إذا موجودة) */}
              {images.length > 0 && (
                <div className="mb-4">
                  <img
                    className="img-fluid rounded mb-3"
                    src={images[0].image}
                    alt="Main"
                  />
                  {images.length > 1 && (
                    <div className="row g-3">
                      {images.slice(1, 3).map((img, index) => (
                        <div className="col-4" key={index}>
                          <img
                            className="img-fluid rounded"
                            src={img.image}
                            alt={`thumb-${index}`}
                          />
                        </div>
                      ))}
                      {images.length > 3 && (
                        <div className="col-4 position-relative">
                          <img
                            className="img-fluid rounded"
                            src={images[3].image}
                            alt="more"
                          />
                          <div
                            className="overlay-plus"
                            data-bs-toggle="modal"
                            data-bs-target="#imagesModal"
                          >
                            +{images.length - 3} more
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* الوصف */}
              <h2 className="typography_h2 border-bottom pb-2 mb-3">
                Description
              </h2>
              <p className="typography_body">{car.description}</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <h2 className="typography_h2 border-bottom pb-2 mb-3">
                Key Features
              </h2>
              <ul className="list-group list-group-flush mb-3">
                {features.length > 0 ? (
                  features.map((feature, index) => (
                    <li key={index} className="list-group-item">
                      {feature.trim()}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-muted">
                    No features listed
                  </li>
                )}
              </ul>
              <button className="button_primary w-100 mb-2">
                Contact Seller
              </button>
              <button className="button_secondary w-100">Make an Offer</button>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <h2 className="typography_h2 border-bottom pb-2 mb-3">Reviews</h2>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">Reviews 1</li>
                <li className="list-group-item">Reviews 2</li>
                <li className="list-group-item">Reviews 3</li>
                <li className="list-group-item">Reviews 4</li>
              </ul>
              <button className="button_primary w-100 mb-2">
                Contact Seller
              </button>
              <button className="button_secondary w-100">Make an Offer</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal مع Carousel (فقط إذا فيه صور) */}
      {images.length > 0 && (
        <div
          className="modal fade"
          id="imagesModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content p-0">
              <div
                id="carouselImages"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {images.map((img, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img
                        src={img.image}
                        className="d-block w-100"
                        alt={`image-${index}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselImages"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselImages"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CarDetails;
