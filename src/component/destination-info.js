import React from "react";

const DestinationInfoComponent = (props) => {
    console.log(props)
    return (
        <div className="col-md-4 m-btm-40">
            <div className="item">
                <div className="project-destination">
                    <a href="#" className="img" style={{ backgroundImage: `url(${props.placeImage})` }}>
                        <div className="text">
                            <h3>{props.placeName}</h3>
                            <span>{props.placeCount}</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default DestinationInfoComponent;