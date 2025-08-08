import React from "react";

function AddCar() {
  return (
    <>
      <main className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <div className="card p-4">
            <h2 className="h4 mb-4">Add a New Car</h2>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="car-title" className="form-label">
                  Car Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="car-title"
                  placeholder="e.g., 2023 Audi A4 Premium"
                />
              </div>
              <div className="col-md-6">
                <label for="price" className="form-label">
                  Price (USD)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="e.g., 45000"
                />
              </div>
              <div className="col-md-6">
                <label for="model" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  placeholder="e.g., A4"
                />
              </div>
              <div className="col-md-6">
                <label for="year" className="form-label">
                  Year
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  placeholder="e.g., 2023"
                />
              </div>
              <div className="col-md-6">
                <label for="mileage" className="form-label">
                  Mileage
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mileage"
                  placeholder="e.g., 15000"
                />
              </div>
              <div className="col-md-6">
                <label for="fuel-type" className="form-label">
                  Fuel Type
                </label>
                <select className="form-select" id="fuel-type">
                  <option>Gasoline</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div className="col-md-6">
                <label for="color" className="form-label">
                  Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  placeholder="e.g., Mythos Black"
                />
              </div>
              <div className="col-md-12">
                <label for="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Provide a detailed description of the car..."
                ></textarea>
              </div>
              <div className="col-md-12">
                <h3 className="h5 mb-3">Features</h3>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-2">
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ac"
                      />
                      <label className="form-check-label" for="ac">
                        Air Conditioning
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="ps"
                      />
                      <label className="form-check-label" for="ps">
                        Power Steering
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="abs"
                      />
                      <label className="form-check-label" for="abs">
                        Anti-lock Brakes
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="leather"
                      />
                      <label className="form-check-label" for="leather">
                        Leather Seats
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="sunroof"
                      />
                      <label className="form-check-label" for="sunroof">
                        Sunroof
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="nav"
                      />
                      <label className="form-check-label" for="nav">
                        Navigation System
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="heated"
                      />
                      <label className="form-check-label" for="heated">
                        Heated Seats
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="camera"
                      />
                      <label className="form-check-label" for="camera">
                        Backup Camera
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h3 className="h5 mb-3">Upload Images</h3>
                <label for="upload-box-input">
                  <div className="uploadBox">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-3"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 16a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v5a4 4 0 01-4 4H7z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                      <path
                        d="M10 9l4-4m0 8l-4 4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>
                    </svg>
                    <p className="mb-1">
                      <strong>Click to upload</strong> or drag and drop
                    </p>
                    <p className="small">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                    <input
                      id="upload-box-input"
                      className="d-none"
                      type="file"
                      multiple
                    />
                  </div>
                </label>
              </div>
              <div className="col-md-12 d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Car
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddCar;
