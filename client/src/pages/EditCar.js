import React from "react";

function EditCar() {
  return (
    <>
      <main className="container py-5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <h1 className="display-5 fw-bold text-dark">
              Edit Your Car Listing
            </h1>
            <p className="text-muted">
              Update the details of your vehicle and manage its images.
            </p>
          </div>
          <form className="bg-white p-4 p-md-5 rounded-4 shadow-sm border">
            <div className="row g-4">
              <div className="col-md-6">
                <label for="make" className="form-label">
                  Make
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="make"
                  value="Toyota"
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
                  value="Camry"
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
                  value="2022"
                />
              </div>
              <div className="col-md-6">
                <label for="mileage" className="form-label">
                  Mileage (km)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="mileage"
                  value="15000"
                />
              </div>
              <div className="col-12">
                <label for="price" className="form-label">
                  Price ($)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value="25000"
                />
              </div>
              <div className="col-12">
                <label for="description" className="form-label">
                  Description
                </label>
                <textarea className="form-control" id="description" rows="5">
                  This is a well-maintained 2022 Toyota Camry with low mileage.
                  Excellent condition, clean title.
                </textarea>
              </div>
            </div>

            <h2 className="h5 fw-bold mt-5 mb-3">Manage Images</h2>
            <div className="row g-3">
              <div className="col-6 col-sm-4 col-md-3">
                <div
                  className="img-thumb"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvr02XpASRTUQ_qKQ2JuGAEf84VJAJX3C0aBvWHIZGHxgbxCjadwV6xdKtCLFtVA0eFQKXRy7IP7kRmqUhdM-a-H7uyp4pUJ4LyCqtsKFsYg1IFy1Yt5Q0SZDZUnvHbW50fPffrvupOnBiffAlVX5HvRVTBTAQbPwSSubC_DamOWh7yCForBQg3vfFDLVYsKmFoZKVNcuCUVobB2J92RbHLBzVubqRnhE8A0RiBADfWczBUquNLwxOKUbbd97wuRx72v1ZN4xpvg')`,
                  }}
                >
                  <div className="img-overlay">
                    <button type="button" className="btn btn-sm btn-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div
                  className="img-thumb"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvr02XpASRTUQ_qKQ2JuGAEf84VJAJX3C0aBvWHIZGHxgbxCjadwV6xdKtCLFtVA0eFQKXRy7IP7kRmqUhdM-a-H7uyp4pUJ4LyCqtsKFsYg1IFy1Yt5Q0SZDZUnvHbW50fPffrvupOnBiffAlVX5HvRVTBTAQbPwSSubC_DamOWh7yCForBQg3vfFDLVYsKmFoZKVNcuCUVobB2J92RbHLBzVubqRnhE8A0RiBADfWczBUquNLwxOKUbbd97wuRx72v1ZN4xpvg')`,
                  }}
                >
                  <div className="img-overlay">
                    <button type="button" className="btn btn-sm btn-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <div
                  className="img-thumb"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdwYOdY-v3vtBDpfc4jJH2WCYNdLFv6XIFomwH1HW0QiV-MUv653rjmzn1sY3sTvGIKIo6KGAr0Qy64CDlfd1gT0rRro2A9k5IOjy-gnILncrYk1pTLbNdG0sPPNjRxTBqVGaV2l3_g7sBPW7kNws4LtmU5PvX25T22cidwRLc7ZQ7GnYGB_VC1d4zeIAP-NZkqKeQuUTikACisvLqUIOSNHi_9bYXpU-RnkF2gz-35ibgj66clpn16C2gNGQMEN-ocgxhWOV3rg')`,
                  }}
                >
                  <div className="img-overlay">
                    <button type="button" className="btn btn-sm btn-danger">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-md-3">
                <label
                  className="w-100 h-100 border border-dashed border-secondary rounded-3 d-flex flex-column align-items-center justify-content-center text-muted p-3"
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-plus-lg mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v6.5H15a.5.5 0 0 1 0 1H8.5V15a.5.5 0 0 1-1 0V9.5H1a.5.5 0 0 1 0-1h6.5V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                  <span className="small">Add Image</span>
                  <input type="file" className="d-none" />
                </label>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-3 mt-5">
              <button type="button" className="btn btn-light">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update Listing
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default EditCar;
