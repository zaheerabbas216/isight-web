import React from "react";
import "./Usecases.scss";
import images from "../../assets/images";

const UseCases = () => {
  return (
    <>
      <div className="usecases_container">
        <div className="usecases_heading">
          <h3>Our Use Cases</h3>

          <div className="usecases_subheading">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
              tempore?
            </h1>
          </div>
        </div>

        <div className="usecases_grid my-5">
          {/* Use Case 1 */}
          <div className="row my-5">
            <div className="col-md-6 d-flex flex-column justify-content-center order-2 order-md-1">
              <h2>Visually Impairment</h2>
              <p>
                Helping individuals with visual impairments with real-time
                scenes description, object identification, and navigation
                assistance.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <img
                className="usecase_img"
                src={images.usecase_one}
                alt="Visually Impairment"
              />
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="row my-5">
            <div className="col-md-6 order-1 order-md-1">
              <img
                className="usecase_img"
                src={images.usecase_one}
                alt="Healthcare"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center order-2 order-md-2">
              <h2>Healthcare</h2>
              <p>
                Using advanced camera technology for secure live video streaming
                for remote patient consultations.
              </p>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="row my-5">
            <div className="col-md-6 d-flex flex-column justify-content-center order-2 order-md-1">
              <h2>Outdoor Activities</h2>
              <p>
                Smart eyewear for outdoor activities enhances navigation,
                safety, and exploration through features like real-time obstacle
                detection and location identification. The advanced eyewear
                functions as a GoPro, allowing users to capture videos and
                photos hands-free.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <img
                className="usecase_img"
                src={images.usecase_one}
                alt="Outdoor Activities"
              />
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="row my-5">
            <div className="col-md-6 order-1 order-md-1">
              <img
                className="usecase_img"
                src={images.usecase_one}
                alt="Defence"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center order-2 order-md-2">
              <h2>Defence</h2>
              <p>
                The defence sector can deploy this technology for advanced
                surveillance, target identification, and tactical awareness in
                various operational environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCases;
