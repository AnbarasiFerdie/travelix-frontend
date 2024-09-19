import React, { useContext } from 'react';
import HeaderComponent from '../component/header';
import HeadingSectionComponent from '../component/heading-section';
import HotelSearchComponent from '../component/hotel-search';
import HotelInfoComponent from '../component/hotel-info';
import FooterComponenet from '../component/footer';
import DataSharing from '../context/context-api';

const HotelPage = () => {

    const context = useContext(DataSharing);


    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <HeadingSectionComponent backgroundImage={require("../images/bg_1.jpg")} textContent="Hotel List"></HeadingSectionComponent>
            <section className="ftco-section ftco-no-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="search-wrap-1">
                                <HotelSearchComponent></HotelSearchComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        {
                            context.filterList.map((value, index) => {
                                return (
                                    <HotelInfoComponent key={index} {...value}></HotelInfoComponent>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <FooterComponenet></FooterComponenet>
        </div>
    );
};

export default HotelPage;