import React, { useContext } from 'react';
import HeaderComponent from '../component/header';
import HeadingSectionComponent from '../component/heading-section';
import TourSearchComponent from '../component/tour-search';
import DestinationInfoComponent from '../component/destination-info';
import FooterComponenet from '../component/footer';
import DataSharing from '../context/context-api';

const DestinationPage = () => {

  const context = useContext(DataSharing);

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <HeadingSectionComponent backgroundImage={require("../images/bg_4.jpg")} textContent="Tour List"></HeadingSectionComponent>
      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <TourSearchComponent></TourSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            {
              context.filterList.length > 0 ? context.filterList.map((value, index) => {
                return (
                  <DestinationInfoComponent key={index} placeName={value.name} placeCount={value.count} placeImage={value.image}></DestinationInfoComponent>
                )
              })
                :
                <h2>No Record found for the given Destination or Location</h2>
            }
          </div>
        </div>
      </section>

      <FooterComponenet></FooterComponenet>
    </div>
  );
};

export default DestinationPage;