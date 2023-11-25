import ProjectrJson from "../projectrJson";
import Projectrw from "../projectwJson";
function Projectr(props) {
  return (
    <>
      {ProjectrJson.map((projectr) => {
        return (
          <section>
            <div className=" container-fluid mt-2 " style={{ backgroundColor: props.theme }}>
              <div className="container-fluid pb-4  rounded-4 mt-1 text-center shadow border border-2 " style={{ backgroundColor: props.container }}>
                <div className="row   ">
                  <div className="col-12 ">
                    <p className="display-6 rounded-5 mt-3" style={{ color: props.text }}>
                      {projectr.name}
                      <img className="rounded-circle" style={{ height: 50 }} src={projectr.img} alt="" />
                    </p>
                    <hr className="dropdown" style={{ color: props.text }} />
                  </div>
                </div>
                <div className="row  justify-content-center ">
                  {/* card */}
                  {Projectrw.map((Projectrw) => {
                    for (let i = 0; i < Projectrw.key.length; i++) {
                      if (Projectrw.key[i] == projectr.name) {
                        return (
                          <>
                            {Projectrw.key.map((p) => {
                              return <></>;
                            })}
                            <div className="col-10 col-sm-6 col-md-4 col-lg-4 mt-3 mx-1">
                              <div class="card rounded-4  shadow card-hover card mx-auto" style={{ backgroundColor: props.skills }}>
                                <img src={Projectrw.img} class=" card-img-top mx-auto rounded-4" alt="..." />
                                <div class="card-body">
                                  <h5 class="card-title" style={{ color: props.text }}>
                                    {Projectrw.name}
                                  </h5>
                                  <hr className="dropdown" style={{ color: props.text }} />
                                  <h6 class="card-title head mt-4" style={{ color: props.text }}>
                                    ساخته شده با
                                  </h6>

                                  {Projectrw.img1.map((img) => {
                                    return (
                                      <>
                                        <img style={{ height: 40 }} src={img} class="mx-1   rounded-circle" alt="..." />
                                      </>
                                    );
                                  })}

                                  <p class="card-text" style={{ color: props.text }}></p>

                                  <a
                                    class="btn  btn-outline-primary  btn-lg mt-3"
                                    style={{ color: props.text }}
                                    href={Projectrw.github}
                                    role="button"
                                    aria-expanded="false"
                                  >
                                    مشاهده
                                  </a>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      }
                    }
                  })}
                  {/* end of card */}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Projectr;
