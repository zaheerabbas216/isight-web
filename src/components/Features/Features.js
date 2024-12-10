import React from "react";
import "./Features.scss";
import images from "../../assets/images";

const Features = () => {
  return (
    <>
      <div className="usecases_container">
        <div className="usecases_heading">
          <h3>Features</h3>

          <div className="usecases_subheading">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
              tempore?
            </h1>
          </div>
        </div>

        <div className="features_card_section my-5">
          <div className="row">
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Provide navigation through voice assistance
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Offer a neckband with built in power bank.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Incorporate a night vision camera for darkness/low light
                    conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    The application will be applicaiton on IOS and Android.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Store and identify upto 1000 faces or more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Enable whats app integration through voice commands
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Read Text, books, MRP's product names and mobile phone text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <img
                  src={images.featured_card}
                  class="card-img-top"
                  alt="featured card image"
                />
                <div class="card-body">
                  <p class="card-text">
                    Provide accurate visual information about the sourrounding
                    area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
