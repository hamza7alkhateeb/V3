import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCarsQuery } from "../services/carApi";
import CarCard from "../components/CarCard";

function Home() {
  const [input, setInput] = useState("");
  const {
    data: featuredDate,
    isLoading: isFeaturedLoading,
    isFetching: isFeaturedFetching,
  } = useGetCarsQuery({ type: "featured" });
  const {
    data: latestDate,
    isLoading: isLatestLoading,
    isFetching: isLatestFetching,
  } = useGetCarsQuery({ type: "latest" });

  const navigate = useNavigate();
  const handleInputSearch = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    navigate(`/filters?keyword=${encodeURIComponent(input)}`);
  };
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <main className="container my-5">
          {/* <!-- Hero --> */}
          <section
            className="position-relative rounded overflow-hidden text-white p-5"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url('https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/2024/bmw-m5-m-performance-parts-teaser-01-16x9.jpg?imwidth=1280')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "480px",
            }}
          >
            <div className="col-md-8">
              <h1 className="display-5 fw-bold">Find Your Dream Car</h1>
              <p className="lead text-light">
                Explore a wide selection of vehicles from top brands, tailored
                to your preferences and budget.
              </p>
              <div className="bg-white bg-opacity-75 p-2 rounded">
                <div className="d-flex gap-2">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for make, model, or keyword"
                    onChange={handleInputSearch}
                    value={input}
                  />
                  <button className="button_primary" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Featured Cars --> */}
          <section className="py-5">
            <h2 className="typography_h2 mb-4">Featured Cars</h2>
            <div className="row g-4">
              {isFeaturedLoading || isFeaturedFetching ? (
                <p>Loading...</p>
              ) : (
                featuredDate?.results?.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))
              )}
            </div>
          </section>

          {/* <!-- Latest Listings --> */}
          <section className="py-5">
            <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
              <h2 className="typography_h2">Latest Listings</h2>
              <div
                className="w-100 w-md-auto position-relative"
                style={{ maxWidth: "300px" }}
              >
                <input
                  type="search"
                  className="input ps-5"
                  placeholder="Filter by price, model, fuel..."
                />
                <svg
                  className="position-absolute top-50 start-0 translate-middle-y ms-3"
                  width="20"
                  height="20"
                  fill="var(--text-secondary)"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </div>
            </div>
            <div className="row g-4">
              {isLatestLoading || isLatestFetching ? (
                <p>Loading...</p>
              ) : (
                latestDate?.results?.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))
              )}
            </div>
          </section>

          {/* <!-- Top Dealers --> */}
          <section className="py-5">
            <h2 className="typography_h2 mb-4">Top Dealers</h2>
            <div className="row g-4">
              <div className="col-sm-6 col-lg-3">
                <div className="card-custom text-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=150&h=150&q=80"
                    className="rounded-circle mb-3"
                    alt="Dealer 1"
                  />
                  <h5 className="fw-semibold">Elite Motors</h5>
                  <p className="typography_body">Over 500 cars sold</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-custom text-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=150&h=150&q=80"
                    className="rounded-circle mb-3"
                    alt="Dealer 2"
                  />
                  <h5 className="fw-semibold">AutoHub</h5>
                  <p className="typography_body">Trusted by 300+ clients</p>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="card-custom text-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=150&h=150&q=80"
                    className="rounded-circle mb-3"
                    alt="Dealer 3"
                  />
                  <h5 className="fw-semibold">DriveAway</h5>
                  <p className="typography_body">Award-winning dealership</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card-custom text-center p-4">
                  <img
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=150&h=150&q=80"
                    className="rounded-circle mb-3"
                    alt="Dealer 4"
                  />
                  <h5 className="fw-semibold">CarNation</h5>
                  <p className="typography_body">Specialists in used cars</p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Blog Snippets --> */}
          <section className="py-5">
            <h2 className="typography_h2 mb-4">From Our Blog</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card-custom">
                  <img
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&h=300&q=80"
                    className="w-100"
                    alt="Blog 1"
                  />
                  <div className="p-3">
                    <h5 className="fw-semibold">
                      5 Tips for Buying a Used Car
                    </h5>
                    <p className="typography_body">
                      Learn what to look for when purchasing a pre-owned
                      vehicle.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-custom">
                  <img
                    src="https://pngimg.com/uploads/ferrari/ferrari_PNG10664.png"
                    className="w-100"
                    alt="Blog 2"
                  />
                  <div className="p-3">
                    <h5 className="fw-semibold">Top 10 SUVs of 2023</h5>
                    <p className="typography_body">
                      A comprehensive review of the best SUVs available this
                      year.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-custom">
                  <img
                    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&h=300&q=80"
                    className="w-100"
                    alt="Blog 3"
                  />
                  <div className="p-3">
                    <h5 className="fw-semibold">Maintaining Your Car</h5>
                    <p className="typography_body">
                      Simple maintenance tips to keep your car running smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
