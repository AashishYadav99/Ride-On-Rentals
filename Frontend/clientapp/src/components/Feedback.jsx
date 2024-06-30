
import pic from '../image/pic4.jpg';

const Feedback = () => {
    const myRating = {
        color: "red"

    }

    return (
        <>


            <div className="row">
                <div className="col-lg " >
                    <img src={pic} alt="" style={{
                        margin: "50px 50px",
                        width: "500px",
                        height: "500px"
                    }} className='rounded-circle' />
                </div>

                <div className="col-lg border border-dark border-3 " style={{ margin: "50px 200px" }}>
                    <form action="" className='mb-5 mt-5' >


                        <div class="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-10">
                                <input type="text" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="text" className="col-sm-2 col-form-label">Remark</label>
                            <div class="col-sm-10">
                                <input type="text" style={{ width: "200px" }} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Rating</label>
                            <div class="col-sm-10">
                                <span class="fa fa-star checked" style={myRating}></span>
                                <span class="fa fa-star checked" style={myRating}></span>
                                <span class="fa fa-star checked" style={myRating}></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>

                    </form>

                </div>
            </div>

        </>
    )
}
export default Feedback