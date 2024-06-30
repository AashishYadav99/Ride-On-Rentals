import UserNavbar from "./UserNavbar";

function VehicleBookingForm() {
  return (
    <>
      <UserNavbar />

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="">
              {/* //grid for radio button start here */}
              <div>
                <div className="container ">
                  <div className="row  fw-bold fs-5 ">
                    <div className="col mt-5 ">
                      <input
                        type="radio"
                        id="OneWay"
                        name="tripType"
                        value="OneWay"
                      />
                      <label htmlFor="OneWay" className="font-weight-bold">One Way</label>
                    </div>
                    <div className="col mt-5 ">
                      <input
                        type="radio"
                        id="TwoWay"
                        name="tripType"
                        value="TwoWay"
                      />
                      <label htmlFor="TwoWay">Two Way</label>
                    </div>
                  </div>

                  <div className="row mt-5">
                    <div className="col">
                      <div>Pickup</div>

                      <input
                        type="date"
                        id="OneWay"
                        name="tripType"
                        value="OneWay"
                        style={{
                          height: "100px",
                          width: "200px",
                          borderRadius: "15px",
                          borderColor: "red",
                          borderBlockWidth: "5px",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div>Drop</div>
                      <input
                        type="date"
                        id="TwoWay"
                        name="tripType"
                        value="TwoWay"
                        style={{
                          height: "100px",
                          width: "200px",
                          borderRadius: "15px",
                          borderColor: "red",
                          borderBlockWidth: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-5" style={{ textAlign: "center" }}>
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleBookingForm;
