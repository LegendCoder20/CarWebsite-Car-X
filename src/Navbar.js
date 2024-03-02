

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            CAR-X
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/topic.html">
                  🔥Trending Topic
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/car-games.html">
                  Car Games
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="help.html">
                      Help
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      +91 000 000 0000
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled">Premium </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success bg-success text-light"
                type="submit"
              >
                Search
              </button>
            </form>
            <div class="mx-2"></div>
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#profileModal"
            >
              Profile
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
