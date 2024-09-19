import React, { useState, useContext } from 'react';
import axios from 'axios';
import DataSharing from '../context/context-api';
import { useNavigate } from "react-router-dom";

const TourSearchComponent = () => {

    const [tourSearch, setTourSearch] = useState({
        destination: "",
        location: ""
    });

    const context = useContext(DataSharing);

    const navigate = useNavigate();

    const handleInput = (event) => {
        setTourSearch({ ...tourSearch, [event.target.name]: event.target.value })
    }

    const filterTourList = () => {

        const url = `https://travelix-backend-august.onrender.com/api/destination/search?destination=${tourSearch.destination}&location=${tourSearch.location}`;

        axios.get(url)
            .then((response) => {
                // console.log(response.data);
                // debugger;
                context.exchangeValue(response.data);
                navigate("/destination");
            })
            .catch((error) => {
                alert(error);
            })
    }

    return (
        <div className="tab-pane" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
            <div className="search-property-1">
                <div className="row no-gutters">
                    <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                            <label htmlFor="#">Destination</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-search"></span></div>
                                <input type="text" className="form-control" placeholder="Search place" name='destination' onChange={handleInput} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                            <label htmlFor="#">Location/Area</label>
                            <div className="form-field">
                                <div className="icon"><span className="fa fa-location-arrow"></span></div>
                                <input type="text" className="form-control" placeholder="Search place" name='location' onChange={handleInput} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex">
                        <div className="form-group d-flex w-100 border-0">
                            <div className="form-field w-100 align-items-center d-flex">
                                <input type="submit" value="Search" onClick={() => filterTourList()}
                                    className="align-self-stretch form-control btn btn-primary p-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourSearchComponent;