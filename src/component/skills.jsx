import Skillsjs from "../skillsJson";

const Skills = (props) => {
  return (
    <>
      {/* skills */}
      <section>
        <div className=" container-fluid mt-2 " style={{ backgroundColor: props.theme }}>
          <div className="container-fluid pb-4  rounded-4 mt-1 text-center shadow border border-2 " style={{ backgroundColor: props.container }}>
            <div className="row   ">
              <div className="col-12 ">
                <p className="display-6 rounded-5 mt-3" style={{ color: props.text }}>
                  مهارت ها
                </p>
                <hr className="dropdown" style={{color:props.text}}/>
              </div>
            </div>
            <div className="row  justify-content-center ">
              {Skillsjs.map((skillsjs) => {
                return (
                  // {/* card */}
                  <div className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-4">
                    <div class="card rounded-4  shadow card-hover card" style={{ backgroundColor: props.skills}}>
                      <img src={skillsjs.img} style={{ height: 100, width: 100 }} class="mx-auto mt-2 card-img-top rounded-5" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title" style={{ color: props.text }}>
                          {skillsjs.name}
                        </h5>
                        <p class="card-text"></p>
                        {/* dropdown */}
                        <div class="dropdown">
                          <a class="btn btn-outline-primary dropdown-toggle" style={{ color: props.text }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            مشاهده نمونه کار
                          </a>

                          <ul class="dropdown-menu" style={{ backgroundColor: props.skills }}>
                            <li>
                              <a class="dropdown-item text-center" href="#" style={{ color: props.text }}>
                                نمایش در github
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item text-center" href="#" style={{ color: props.text }}>
                                نمایش در وب سایت
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* end of dropdown */}
                      </div>
                    </div>
                  </div>
                  // {/* end of card */}
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/*end of skills */}
    </>
  );
};

export default Skills;
