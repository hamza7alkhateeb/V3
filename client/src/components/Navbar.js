import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { logout } from "../features/authSlice";
import { toast } from "react-toastify";

function Navbar() {
  const user = useSelector((state) => state.authState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handelLogout() {
    dispatch(logout());
    navigate("/login");
    toast.success("Logout Successfully");
  }
  function handelLogin() {
    navigate("/login");
  }
  return (
    <>
      <header className="sticky-top bg-white shadow-sm custom-header d-flex justify-content-between align-items-center px-4 py-3">
        <div className="d-flex align-items-center gap-2">
          <svg
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
            />
          </svg>
          <h2 className="fw-bold mb-0 text-dark">AutoZone</h2>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Link to="/home" className="text-dark fw-medium text-decoration-none">
            Home
          </Link>
          <Link
            to="/profile"
            className="text-dark fw-medium text-decoration-none"
          >
            profile
          </Link>

          <Link
            to="/addCar"
            className="text-dark fw-medium text-decoration-none"
          >
            addCar
          </Link>
          <Link
            to="/editCar"
            className="text-dark fw-medium text-decoration-none"
          >
            editCar
          </Link>
          <Link
            to="/filters"
            className="text-dark fw-medium text-decoration-none"
          >
            filters
          </Link>
          <Link
            to="/myListings"
            className="text-dark fw-medium text-decoration-none"
          >
            myListings
          </Link>

          <Link
            to="/searchResults"
            className="text-dark fw-medium text-decoration-none"
          >
            searchResults
          </Link>
          <Link
            to="/NotFound"
            className="text-dark fw-medium text-decoration-none"
          >
            NotFound
          </Link>

          {user != null ? (
            <button
              className="btn btn-outline-secondary fw-bold"
              onClick={handelLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-outline-secondary fw-bold"
              onClick={handelLogin}
            >
              Login
            </button>
          )}
        </div>
      </header>
      {/* <header className="sticky-top bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center gap-3">
            <a
              href="0"
              className="d-flex align-items-center text-decoration-none text-dark"
            >
              <svg
                className="me-2"
                width="40"
                height="40"
                fill="var(--primary-color)"
                viewBox="0 0 48 48"
              >
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" />
              </svg>
              <h1 className="h4 fw-bold m-0">AutoZone</h1>
            </a>
            <nav className="d-none d-md-flex gap-4">
              <a href="0" className="text-decoration-none text-dark fw-medium">
                Home
              </a>
              <a href="0" className="text-decoration-none text-dark fw-medium">
                Sell
              </a>
              <a href="0" className="text-decoration-none text-dark fw-medium">
                My Garage
              </a>
              <a href="0" className="text-decoration-none text-dark fw-medium">
                Community
              </a>
            </nav>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="d-none d-sm-block position-relative">
              <input
                type="search"
                className="input ps-5"
                placeholder="Search"
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
            <button className="button_secondary p-2">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </button>

            <div
              className="rounded-circle bg-cover"
              style={{
                width: "40px",
                height: "40px",
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6dKQXYGQPYyAXiUfXo0OYx3PALfumopeS13cfTbAms62XkcwADCszyZiINTVaAez4ou72wSAUXicMs-5zdYwcorbfg-0RMSn8ioZTqRy0nmCV-_aO_sfS-K3te4Puqv1IxAKvaN0xPnOxLW6kstk5EA2v7EfZ2PSvL9JMBFi1VDlGNArFW4A5zcPbkt-tkVFfA__IeZEo5FYmpMWGjAbjXCXimwI4DHjIQHEqHqYTMZxZqZX1LZyK8rvxf1M5KKWOaExRJ7fZwWd5')",
              }}
            ></div>

            <button className="d-md-none button_secondary p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header> */}
      {/* <header class="bg-white shadow-sm sticky top-0 z-10">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <div class="flex items-center gap-8">
            <a class="flex items-center gap-2" href="#">
              <svg
                class="h-8 w-8 text-[var(--primary-color)]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span class="text-2xl font-bold text-[var(--text-primary)]">
                AutoFind
              </span>
            </a>
            <div class="hidden md:flex items-center gap-8">
              <a
                class="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                Home
              </a>
              <a
                class="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                Sell
              </a>
              <a
                class="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                My Garage
              </a>
              <a
                class="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium"
                href="#"
              >
                Community
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="hidden md:flex relative">
              <input
                class="input w-64 pr-10"
                placeholder="Search"
                type="text"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  class="h-5 w-5 text-[var(--text-secondary)]"
                  fill="currentColor"
                  height="24px"
                  viewBox="0 0 256 256"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
            </div>
            <button class="button_secondary p-2 rounded-full">
              <svg
                class="h-6 w-6"
                fill="currentColor"
                height="20px"
                viewBox="0 0 256 256"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
              </svg>
            </button>
            <div
              class="h-10 w-10 rounded-full bg-cover bg-center"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC25sKdgBJaYG2d5WusVrhmtuEp9luWIJe6KQREUDJe2LAeGjRGSf3Wkj9vcD1Ivyr6NORyhdOoLCcYx4DRHC4BOISW9WpbjE98UtDjrPFqXm0U0cmu1bXw0oD1y0DFi4_6ba2h6Y_8w0EYWNVZdrtMqTaUnB1jgiYwg9g9TivMEJPTc5-GPi9OAgGv2MFk6sjWcERljLFnz5stHlnVm2SDOi1i3LhuiiMH-d_oDxRzfCMD4irdeVDIjx_lUZY0GLvmsTv_JvQ2VsxK");'
            ></div>
          </div>
        </nav>
      </header> */}
      {/* <header class="bg-white shadow-sm">
        <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
          <a class="flex items-center gap-2" href="#">
            <svg
              class="h-8 w-8 text-[var(--primary-color)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M12 14a2 2 0 100-4 2 2 0 000 4z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <span class="text-xl font-bold text-[var(--text-primary)]">
              AutoMarket
            </span>
          </a>
          <div class="hidden md:flex items-center space-x-6">
            <a
              class="typography_body hover:text-[var(--primary-color)]"
              href="#"
            >
              Buy
            </a>
            <a
              class="typography_body hover:text-[var(--primary-color)]"
              href="#"
            >
              Sell
            </a>
            <a
              class="typography_body hover:text-[var(--primary-color)]"
              href="#"
            >
              Dashboard
            </a>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
            <img
              alt="User avatar"
              class="h-10 w-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXWmSkygySYf3QR-SOu-5hQzXJEP1H4pN8aS5JijzlvMhOBBkfqisgDJWUd1Ew5wYWehd9P-DiRh1bRhKTeR6r_YCJ4oo9wa13jBr2qAowtuZHzX1r42bS0RCDmIdMdajoKgf3DA1-R2LhjR82q7tp0SYma-f4ZWsL4PZU3-N5V1S1CTklFHD71sKzIRmuvnuleRxnY4y0EtnKaBSJKnET9m5b8xC69Ud8xIzkrvseAVgxiomydCcFQq4MmmiFT885Cy9QY90RmJ84"
            />
          </div>
        </nav>
      </header> */}
    </>
  );
}

export default Navbar;
