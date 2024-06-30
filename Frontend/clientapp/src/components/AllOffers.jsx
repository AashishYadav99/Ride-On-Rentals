import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function AllOffers() {
    const URL = "http://localhost:9999/alloffers";
    const imgfolderapi = "http://localhost:9999/offers/";

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const resp = await axios.get(URL);
                setOffers(resp.data);
            } catch (err) {
                console.log(`Error: ${err}`);
            }
        }
        fetchOffers();
    }, []);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>All Offers</h1>
            <div className="container mt-4" style={{ minHeight: 'calc(100vh - 100px)' }}>
                <div className="row">
                    {offers.map((offer, index) => (
                        <div className="col-4" key={index}>
                            <div className="card bg-gradient text-white mt-5 p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: "1rem", overflowY: 'auto' }}>
                                <div className="card-body justify-content-center text-center p-4">
                                            <img
                                                src={`${imgfolderapi}${offer.offimg}`}
                                                alt="offerimg"
                                                className="img-fluid"
                                                style={{ width: '200px', height: "200px", borderRadius: '10px' }}
                                            />
                                                <h5 className="mb-1">{offer.discount}</h5>
                                                <p className="mb-2 pb-1"><strong>Offer Code: </strong>{offer.code}</p>
                                                <p className="mb-2 pb-1"><strong>Offer on: </strong>{offer.vehicletype}</p>
                                                <p className="mb-2 pb-1"><strong>Validity: </strong>{offer.expiry}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}