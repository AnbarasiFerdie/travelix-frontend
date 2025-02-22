import React from 'react';

const HotelInfoComponent = (props) => {
    console.log(props)
    return (
        <div className="col-md-4">
            <div className="project-wrap hotel">
                <a href="#" className="img" style={{ backgroundImage: `url(${props.image})` }}>
                    <span className="price">${props.price}/person</span>
                </a>
                <div className="text p-4">
                    <p className="star mb-2">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </p>
                    <span className="days">{props.hotelTourCount} Days Tour</span>
                    <h3><a href="#">{props.name}</a></h3>
                    <p className="location"><span className="fa fa-map-marker"></span>{props.location}</p>
                    <ul>
                        <li><span className="flaticon-shower"></span>2</li>
                        <li><span className="flaticon-king-size"></span>3</li>
                        <li><span className="flaticon-mountains"></span>Near Mountain</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HotelInfoComponent;