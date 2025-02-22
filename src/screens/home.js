import React, { useState } from "react";

import HeaderComponent from "../component/header";
import DestinationInfoComponent from "../component/destination-info";
import FooterComponent from "../component/footer";
import TourSearchComponent from "../component/tour-search";
import HotelSearchComponent from "../component/hotel-search";
import ServiceInfoComponent from "../component/service-info";
import { NavLink } from "react-router-dom";
import QuoteSectionComponent from "../component/quote-section";



const HomePage = () => {

    const tourDestination = [
        {
            placeName: "Singapore",
            placeCount: "12",
            placeImage: require("../images/place-1.jpg")
        },
        {
            placeName: "Canada",
            placeCount: "8",
            placeImage: require("../images/place-2.jpg")
        },
        {
            placeName: "Thailand",
            placeCount: "10",
            placeImage: require("../images/place-3.jpg")
        }
    ]

    const [enableHotelFilter, updateHotelFilter] = useState(true);

    const showHoteSearch = () => {
        updateHotelFilter(true);
    }

    const showTourSearch = () => {
        updateHotelFilter(false);
    }
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <div className="hero-wrap js-fullheight header-banner" style={{ backgroundImage: `url(${require("../images/bg_5.jpg")})` }}>
                <div className="overlay header-banner"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center">
                        <div className="col-md-7">
                            <span className="subheading">Welcome to Travelix</span>
                            <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
                            <p className="caps">Travel to the any corner of the world, without going around in circles</p>
                        </div>

                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ftco-search d-flex justify-content-center">
                                <div className="row">
                                    <div className="col-md-12 nav-link-wrap">
                                        <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <NavLink to="/" className={enableHotelFilter ? "nav-link selected-search" : "nav-link"} id="v-pills-2-tab" data-toggle="pill" role="tab" onClick={() => showHoteSearch()}
                                                aria-controls="v-pills-2" aria-selected="false">Hotel</NavLink>

                                            <NavLink to="/" onClick={() => showTourSearch()} className={enableHotelFilter ? "nav-link" : "nav-link selected-search"} id="v-pills-1-tab" data-toggle="pill" role="tab"
                                                aria-controls="v-pills-1" aria-selected="true">Search Tour</NavLink>

                                        </div>
                                    </div>
                                    <div className="col-md-12 tab-wrap">

                                        <div className="tab-content" id="v-pills-tabContent">

                                            {
                                                enableHotelFilter ?
                                                    <HotelSearchComponent></HotelSearchComponent>
                                                    :
                                                    <TourSearchComponent></TourSearchComponent>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceInfoComponent></ServiceInfoComponent>
            <section className="ftco-sections">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">Destination</span>
                            <h2 className="mb-4">Tour Destination</h2>
                        </div>
                    </div>
                    <div className="row">
                        {tourDestination.map((value, index) => {
                            return (
                                <DestinationInfoComponent key={index} placeName={value.placeName} placeCount={value.placeCount} placeImage={value.placeImage}></DestinationInfoComponent>

                            )
                        }
                        )}
                    </div>
                </div>
            </section>
            <section className="ftco-sections">
                <div className="container">
                    <div className="row justify-content-center pb-4">
                        <div className="col-md-12 heading-section text-center">
                            <span className="subheading">Our Blog</span>
                            <h2 className="mb-4">Recent Post</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex">
                            <div className="blog-entry justify-content-end">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${require("../images/image_1.jpg")})` }}>
                                </a>
                                <div className="text">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one">
                                            <span className="day">11</span>
                                        </div>
                                        <div className="two">
                                            <span className="yr">2020</span>
                                            <span className="mos">September</span>
                                        </div>
                                    </div>
                                    <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="blog-entry justify-content-end">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${require("../images/image_2.jpg")})` }}>
                                </a>
                                <div className="text">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one">
                                            <span className="day">11</span>
                                        </div>
                                        <div className="two">
                                            <span className="yr">2020</span>
                                            <span className="mos">September</span>
                                        </div>
                                    </div>
                                    <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="blog-entry">
                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${require("../images/image_3.jpg")})` }}>
                                </a>
                                <div className="text">
                                    <div className="d-flex align-items-center mb-4 topp">
                                        <div className="one">
                                            <span className="day">11</span>
                                        </div>
                                        <div className="two">
                                            <span className="yr">2020</span>
                                            <span className="mos">September</span>
                                        </div>
                                    </div>
                                    <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                    <p><a href="#" className="btn btn-primary">Read more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <QuoteSectionComponent></QuoteSectionComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}
export default HomePage;