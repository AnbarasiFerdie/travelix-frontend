import React from 'react';

const HeadingSectionComponent = (props) => {
  return (
    <section class="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <div class="overlay js-fullheight"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                class="fa fa-chevron-right"></i></a></span>{props.textContent}<span><i class="fa fa-chevron-right"></i></span>
              </p>
              <h1 class="mb-0 bread">{props.textContent}</h1>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeadingSectionComponent;