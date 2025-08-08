import React from "react";

function SearchResults() {
  return (
    <>
      <main class="container py-5">
        <div class="mb-5">
          <div class="position-relative mb-4">
            <span class="position-absolute top-50 start-0 translate-middle-y ps-3">
              🔍
            </span>
            <input
              class="form-control ps-5 input"
              type="text"
              value="Search by make, model, or keyword"
            />
            <button class="position-absolute top-50 end-0 translate-middle-y pe-3 text-secondary">
              ❌
            </button>
          </div>

          <h2 class="fs-4 fw-semibold mb-4">Search Results</h2>

          <div class="d-flex flex-wrap gap-2 align-items-center">
            <button class="button_secondary d-flex align-items-center gap-2">
              Price ⬇
            </button>
            <button class="button_secondary d-flex align-items-center gap-2">
              Make ⬇
            </button>
            <button class="button_secondary d-flex align-items-center gap-2">
              Model ⬇
            </button>
            <button class="button_secondary d-flex align-items-center gap-2">
              Fuel Type ⬇
            </button>

            <div class="ms-auto d-flex align-items-center gap-2">
              <p class="mb-0 text-secondary small fw-medium">
                Applied Filters:
              </p>
              <span class="badge rounded-pill bg-primary-subtle text-dark d-flex align-items-center gap-1">
                Toyota
                <button class="btn-close btn-close-white btn-sm ms-1"></button>
              </span>
              <button class="btn btn-link text-decoration-none text-primary">
                Clear All
              </button>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100">
              <div
                class="ratio ratio-16x9"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDx5IVTAk7-eqJYX0Q5lEZIcmCWTSaQU7ad9Mpnpcd2h6IU0c3StsPxBUWEC8ZYA2lhHBZ-uDsxq9YN2oh1Pvsvd2vhEueIhOdXByzxj-pr5aw9v2U_qmtq-LXES8iTnFRxY0t2Io_QPTffMDP3gEbfZjDQl1D2DBop78ubfDc72wsgXSicYpDnN8k_ZfisjYnjwOqqG-p7H3mNeylIZaH0fdD_y6evSX4zOD3hKEzHZLi05kcHCVwnIo_IKuHtqO50QrbHYAXB_2')",
                }}
              ></div>
              <div class="card-body">
                <p class="card-title fw-semibold">2021 Sedan XLE</p>
                <p class="card-text text-secondary small">
                  $28,500 | 25,000 miles
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Copy and modify the above block for each car --> */}
          {/* <!-- ... --> */}
        </div>

        <div class="d-flex justify-content-center pt-5 gap-2">
          <a
            href="0"
            class="button_secondary rounded-circle d-flex align-items-center justify-content-center p-2"
          >
            ◀
          </a>
          <a
            href="0"
            class="button_primary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            1
          </a>
          <a
            href="0"
            class="button_secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            2
          </a>
          <a
            href="0"
            class="button_secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            3
          </a>
          <a
            href="0"
            class="button_secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            4
          </a>
          <a
            href="0"
            class="button_secondary rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
            }}
          >
            5
          </a>
          <a
            href="0"
            class="button_secondary rounded-circle d-flex align-items-center justify-content-center p-2"
          >
            ▶
          </a>
        </div>
      </main>
    </>
  );
}

export default SearchResults;
