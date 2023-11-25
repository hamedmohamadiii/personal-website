
const Banner = (props) => {
  return (
    <>
    <section id="home">
      <div className="bg-image container-fluid " style={{backgroundColor:props.theme,}}>
        <div className="row ">
          <div className="col-12 text-center" style={{ marginTop: 80 }}>
            <img className="rounded-pill mt-3 " src={process.env.PUBLIC_URL + "/images/hamedmohamadi.png"} style={{ height: 220 }} alt="" />
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center">
            <p className="h4 mt-3" style={{color:props.text}} >سلام!</p>
            
            <p  className="display-6 " style={{color:props.text}} >حامد محمدی هستم</p>
            <p className="" style={{color:props.text}} >در بخش (front-End) فعالیت دارم و تمرکز اصلی من روی (react.js)هست.</p>
          </div>
        </div>
        <div id="skills" className="row ">
          <div className="col-12 text-center">
            <div className="" >
              <button className="btn btn-primary rounded-pill mb-3 mt-2 mx-1"><a href="#project" className="text-light  " style={{textDecoration:"none",}}>نمونه کار</a></button>
              <button   className="btn btn-primary rounded-pill mb-3 mt-2 mx-1 "><a href="#skills" className="text-light  " style={{textDecoration:"none",}}>مهارت ها</a></button>
              <button className="btn btn-primary rounded-pill mb-3 mt-2 mx-1"><a href="https://github.com/hamedmohamadiii?tab=repositories" className="text-light  " style={{textDecoration:"none",}}>github</a><i class="bi bi-github  pe-1" style={{ fontSize: 16 }}></i></button>

            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Banner;
