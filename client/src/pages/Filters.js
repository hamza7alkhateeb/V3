import React, { useEffect } from "react";
import { useState } from "react";
import { useGetCarsQuery } from "../services/carApi";
import { useLocation } from "react-router-dom";
import CarCard from "../components/CarCard";

function Filters() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialKeyword = queryParams.get("keyword") || "";

  const list = { t: 1, w: 2 };

  const [filters, setFilters] = useState({
    price_range: "",
    model: "",
    fuel_type: "",
    mileage_range: "",
    year: "",
    color: "",
    page: 3,
    keyword: initialKeyword,
  });
  const [newFilters, setNewFilters] = useState({
    keyword: initialKeyword,
  });
  const [ordering, setOrdering] = useState("-created_at");
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching } = useGetCarsQuery({
    ...newFilters,
    page: currentPage,
    ordering: ordering,
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.id]: e.target.value === "Any" ? "" : e.target.value,
    });
  };
  const applyFilters = () => {
    setCurrentPage(1);
    setNewFilters(filters);
  };

  const goToPage = (page) => {
    if (!data?.total_pages) return;
    if (page >= 1 && page <= data.total_pages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* <!-- Filters Sidebar --> */}
          <aside className="col-lg-3 mb-4">
            <button
              className="btn btn-primary w-100 d-lg-none mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#filtersCollapse"
            >
              Filters
            </button>
            <div className="card collapse d-lg-block" id="filtersCollapse">
              <div className="card-body">
                <h5 className="card-title mb-3">Filters</h5>
                <div className="mb-3">
                  <label for="price-range" className="form-label">
                    Price Range
                  </label>
                  <select
                    className="form-select"
                    id="price-range"
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>$10,000 - $20,000</option>
                    <option>$20,000 - $30,000</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="model" className="form-label">
                    Model
                  </label>
                  <select
                    className="form-select"
                    id="model"
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>Sedan X</option>
                    <option>SUV Y</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="fuel-type" className="form-label">
                    Fuel Type
                  </label>
                  <select
                    className="form-select"
                    id="fuel-type"
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>Gasoline</option>
                    <option>Electric</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="mileage" className="form-label">
                    Mileage
                  </label>
                  <select
                    className="form-select"
                    id="mileage"
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>Under 25,000</option>
                    <option>25,000 - 50,000</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="year" className="form-label">
                    Year
                  </label>
                  <select
                    className="form-select"
                    id="year"
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="color" className="form-label">
                    Color
                  </label>
                  <select
                    className="form-select"
                    id="color"
                    onChange={handleChange}
                  >
                    <option>Any</option>
                    <option>White</option>
                    <option>Black</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label for="keyword" className="form-label">
                    Keyword Search
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="keyword"
                    placeholder="e.g., leather seats"
                    onChange={handleChange}
                    value={filters.keyword}
                  />
                </div>
                <button
                  className="btn btn-primary w-100"
                  onClick={applyFilters}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* <!-- Cars Grid --> */}
          <section className="col-lg-9">
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4">
              <h2 className="h3 mb-3 mb-sm-0">Available Cars</h2>
              <div className="d-flex gap-2">
                {/* <!-- Sort Dropdown --> */}
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Sort by
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setCurrentPage(1);
                          setOrdering("price");
                        }}
                      >
                        Price: Low to High
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setCurrentPage(1);
                          setOrdering("-price");
                        }}
                      >
                        Price: High to Low
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setCurrentPage(1);
                          setOrdering("-created_at");
                        }}
                      >
                        Newest Cars
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          setCurrentPage(1);
                          setOrdering("created_at");
                        }}
                      >
                        Oldest Cars
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {isLoading || isFetching ? (
                <p>Loading...</p>
              ) : (
                data?.results?.map((car) => <CarCard key={car.id} car={car} />)
              )}
            </div>

            {/* <!-- Pagination --> */}
            <nav className="mt-4">
              <ul className="pagination justify-content-center">
                <li
                // className={`page-item ${!data?.previous ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    href="0"
                    disabled={!data?.previous}
                    onClick={() => goToPage(currentPage - 1)}
                  >
                    «
                  </button>
                </li>

                {/* <li className="page-item active">
                  <a className="page-link" href="0">
                    1
                  </a>
                </li> */}
                {data?.total_pages &&
                  Array.from({ length: data.total_pages }, (_, i) => i + 1)
                    .filter((page) => {
                      if (currentPage === 1) {
                        return page <= 3; // أول 3 صفحات
                      } else if (currentPage === data.total_pages) {
                        return page >= data.total_pages - 2; // آخر 3 صفحات
                      } else {
                        return (
                          page >= currentPage - 1 && page <= currentPage + 1
                        ); // وسط الصفحات
                      }
                    })
                    .map((page) => (
                      <li
                        key={page}
                        className={`page-item ${
                          currentPage === page ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => goToPage(page)}
                        >
                          {page}
                        </button>
                      </li>
                    ))}

                <li className={`page-item ${!data?.next ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    href="0"
                    disabled={!data?.next}
                    onClick={() => goToPage(currentPage + 1)}
                  >
                    »
                  </button>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </>
  );
}

export default Filters;
