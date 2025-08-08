import React from "react";

function MyListings() {
  return (
    <>
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 fw-bold">My Listings</h1>
          <button className="btn btn-primary d-flex align-items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Add New Car
          </button>
        </div>

        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Model</th>
                  <th>Price</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2021 Tesla Model 3</td>
                  <td>Long Range</td>
                  <td>$35,000</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2021 Tesla Model 3</td>
                  <td>Long Range</td>
                  <td>$35,000</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2021 Tesla Model 3</td>
                  <td>Long Range</td>
                  <td>$35,000</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2021 Tesla Model 3</td>
                  <td>Long Range</td>
                  <td>$35,000</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2021 Tesla Model 3</td>
                  <td>Long Range</td>
                  <td>$35,000</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2020 Ford Mustang</td>
                  <td>GT Premium</td>
                  <td>$42,000</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2022 BMW 3 Series</td>
                  <td>330i Sedan</td>
                  <td>$48,500</td>
                  <td className="text-end">
                    <a href="0" className="text-primary me-2">
                      Edit
                    </a>
                    <a href="0" className="text-danger">
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!-- Pagination --> */}
        <nav className="mt-4" aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" href="0" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="0">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="0">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="0">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="0">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="0">
                10
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="0">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}

export default MyListings;
