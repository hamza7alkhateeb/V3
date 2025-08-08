import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main class="d-flex flex-column align-items-center justify-content-center text-center py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd2331Jsi6-QxJ_IwQ42KV0k0cc9DFzu0fh4rU7xjo_DkVRiY8KoKz26TtFdqK0DUHEJ5Act4Zma99o9PPIDdjqIIkKtW0L1JGUivJfonPyHFDZxrJqCI8N2pyf4TGGXHUf9884IPYD6wzjse3_lTedD17PFL10diqYz--4LVA8g5Bj1YU0kgfpepsK-xonORzBtr1x_qrh-D-pepylvgn-hr9L6Cax6cbrfgyvigfT-__Q3wSgQKpXYOSBnLbL-eN19-BYwAoFb6z"
                alt="404 Not Found"
                class="img-fluid mb-4"
                style={{
                  maxWidth: "400px",
                }}
              />

              <h1 class="error-title">404</h1>
              <h2 class="fs-3 fw-semibold mb-2">Oops! Page Not Found.</h2>
              <p class="error-message mx-auto">
                We can't seem to find the page you're looking for. It might have
                been moved, deleted, or maybe you just mistyped the URL.
              </p>
              <Link
                to="/home"
                // className="card-custom text-decoration-none text-dark"
                className="button-primary"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound;
