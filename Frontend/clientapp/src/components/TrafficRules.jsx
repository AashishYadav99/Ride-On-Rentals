import stop from "../image/pic1.jpg";
import oneway from "../image/pic1.jpg";
import nohorn from "../image/pic1.jpg";


function TrafficRules() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="card" style={{ width: "288px", height: "500px" }}>
              <img className="card-img-top" src={stop} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Traffic Signs</h5>
                <p className="card-text">
                  Drivers should immediately stop after seeing this.
                </p>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card" style={{ width: "288px", height: "200px" }}>
              <img className="card-img-top" src={oneway} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Traffic Signs</h5>
                <p className="card-text">
                 one way
                </p>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm"><div className="card" style={{ width: "288px", height: "200px" }}>
              <img className="card-img-top" src={nohorn} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Traffic Signs</h5>
                <p className="card-text">
                 one way
                </p>
              </div>
            </div>{" "}</div>
        </div>
      </div>
    </>
  );
}

export default TrafficRules;
