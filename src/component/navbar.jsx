const Navbar = (props) => {
  const onThemeLightn = () => {
    props.onThemeLight();
  };
  const onThemeDarkn = () => {
    props.onThemeDark();
  };
  return (
    <>
      <section id="home">
        <div className="border border-1 border-opacity-75   border-light navbar navbar-background navbar-expand-md rounded-pill mx-3  mt-2   fixed-top bg-opacity-75 shadow-sm " style={{ backgroundColor: props.theme }}>
          <div className="container-fluid ">
            {/* toggler */}
            <button
              class="navbar-toggler "
              style={{ backgroundColor: "#ffffff" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" style={{ backgroundColor: "#ffffff" }}></span>
            </button>
            {/* end of toggler */}

            {/* brand */}
            <div className="me-auto ">
              <a class="" href="#">
                <img src={process.env.PUBLIC_URL + "/images/OBJECTS.png"} style={{ height: 40 }} alt="" />
              </a>
            </div>
            {/* end of brand */}

            {/* item */}
            <div class="offcanvas offcanvas-end  " style={{ backgroundColor: props.theme }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header  border-bottom  shadow-sm  ">
                <button type="button" style={{ backgroundColor: "#ffffff" }} class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <h5 style={{ marginRight: 125 }} class="offcanvas-title  " id="offcanvasNavbarLabel">
                  <img src={process.env.PUBLIC_URL + "/images/OBJECTS.png"} style={{ height: 45 }} alt="" />
                </h5>
              </div>

              <div class="offcanvas-body align-self-md-center  ">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item     mb-2 ">
                    <a class="nav-link active item mx-2 " style={{ color: props.text }} aria-current="page" href="#home">
                      خانه
                    </a>
                  </li>
                  <li class="nav-item dropdown   mb-2">
                    <a class="nav-link item mx-2 " style={{ color: props.text }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      نمونه کار
                    </a>
              
                  </li>
                  <li class="nav-item  mb-2">
                    <a class="nav-link  item mx-2" style={{ color: props.text }} aria-current="page" href="#skills">
                      مهارت ها
                    </a>
                  </li>
                  <li class="nav-item   mb-2">
                    <a class="nav-link  item mx-2" style={{ color: props.text }} aria-current="page" href="#home">
                      درباره من
                    </a>
                  </li>
                </ul>
                <hr className="dropdown" style={{ color: props.text }} />
                {/* dropdown */}
                <div class="btn-group d-md-none dropstart">
                  <a role="button" className=" " data-bs-toggle="dropdown" aria-expanded="false" style={{ color: props.text }} href="#">
                    <i class="bi bi-brightness-high  p-2 item-icon " style={{ fontSize: 26 }}></i>
                  </a>

                  <ul class="dropdown-menu text-center rounded-3" style={{ backgroundColor: "#cfcdca" }}>
                    <li>
                      <a role="button" onClick={onThemeLightn} class="dropdown-item rounded-3" href="#">
                        روشن
                      </a>
                    </li>
                    <hr className="dropdown" style={{ Color: props.text }} />
                    <li>
                      <a role="button" onClick={onThemeDarkn} class="dropdown-item rounded-3" href="#">
                        تاریک
                      </a>
                    </li>
                  </ul>
                </div>
                {/* end of dropdown */}
                <a className="d-md-none " href="https://github.com/hamedmohamadiii?tab=repositories">
                  <i class="bi bi-github item-icon p-2" style={{ fontSize: 26, color: props.text }}></i>
                </a>
              </div>
            </div>
            {/* end of item */}
            {/* dropdown */}
            <div class="btn-group">
              <a role="button" className="d-none d-md-flex   " data-bs-toggle="dropdown" aria-expanded="false" style={{ color: props.text }} href="#">
                <i class="bi bi-brightness-high  p-2 item-icon" style={{ fontSize: 26 }}></i>
              </a>

              <ul class="dropdown-menu text-center rounded-3" style={{ backgroundColor: "#cfcdca" }}>
                <li>
                  <a role="button" onClick={onThemeLightn} class="dropdown-item rounded-3" href="#">
                    روشن
                  </a>
                </li>
                <hr className="dropdown" style={{ Color: props.text }} />
                <li>
                  <a role="button" onClick={onThemeDarkn} class="dropdown-item rounded-3" href="#">
                    تاریک
                  </a>
                </li>
              </ul>
            </div>
            {/* end of dropdown */}

            {/* icon-link */}

            <a className="d-none d-md-flex  " style={{ color: props.text }} href="https://github.com/hamedmohamadiii?tab=repositories">
              <i class="bi bi-github item-icon p-2" style={{ fontSize: 26 }}></i>
            </a>

            {/* end of icon-link */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
