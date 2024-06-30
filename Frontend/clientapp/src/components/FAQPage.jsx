import React from 'react';

function FAQPage() {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Frequently Asked Questions</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Can I rent a vehicle without a valid driver's license?
              </button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              No, a valid driver's license is required for all vehicle rentals.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What are the accepted payment methods?
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              We accept major credit cards, debit cards, and cash payments.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Can I rent multiple vehicles at once?
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
              Yes, you can rent multiple vehicles simultaneously, subject to availability.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFour">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Is insurance included in the rental price?
              </button>
            </h5>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div className="card-body">
              Basic insurance coverage is included, but additional insurance options are available for purchase.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingFive">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Are there any age restrictions for renting vehicles?
              </button>
            </h5>
          </div>
          <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
            <div className="card-body">
              Yes, renters must be at least 21 years old (age may vary by location) and have a valid driver's license.
            </div>
          </div>
        </div>
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
}

export default FAQPage;
