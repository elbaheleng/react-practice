import React from 'react'
import './hero.css'

function Hero() {
  const sliderTabs = document.querySelectorAll(".slider-tab");
  const swiper = new Swiper(".slider-container", {
    effect: "fade",
    speed: 1300,
   autoplay: {delay : 4000}
  });
  sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      swiper.slideTo(index);
    })
  })
 
  return (
    <>
      <div className="slider-container">
        {/* Slider List Items */}
        <div className="slider-wrapper swiper-wrapper">
          <div className="slider-item  swiper-slide ">
            {/* herocontent1 */}

            <div className="slider-content bg-black w-100">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-white">
                  <div className='mt-5 ps-3'>
                    <h3>Simulation</h3>
                    <h1>NVIDIA Omniverse Expands Ecosystem With Wave of Physical AI Adoption</h1>
                    <p className='fs-4 mt-3'>Leading industrial software and service providers are integrating Omniverse into their solutions to accelerate industrial digitalization with physical AI.</p>
                    <button type='button' className='p-2' style={{ backgroundColor: "limegreen" }}> Read Press Release</button>
                  </div>

                </div>
                <div className="col-md-12 col-lg-6 text-center">
                  <img className='my-5 img-fluid w-75 w-lg-100' src="./hero1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item  swiper-slide ">
            {/* herocontent2 */}
            <div id='herocontent2' className="slider-content bg-black w-100">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-white">
                  <div className='mt-5 ps-3'>
                    <h3>HPC</h3>
                    <h1>Climate Tech Companies Adopt Earth-2 for Weather Predictions</h1>
                    <p className='fs-4 mt-3'>Leading global partners adopt NVIDIA Omniverse Blueprint for Earth-2 Weather Analytics.</p>
                    <button type='button' className='p-2' style={{ backgroundColor: "limegreen" }}>Learn More</button>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 text-center">
                  <img className='my-5 img-fluid w-75 w-lg-100' src="./hero2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item  swiper-slide ">
            {/* herocontent3 */}

            <div className="slider-content bg-black w-100">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-white">
                  <div className='mt-5 ps-3'>
                    <h3>Data Center</h3>
                    <h1>NVIDIA Delivers World Record Inference Performance on DeepSeek-R1</h1>
                    <p className='fs-4 mt-3'>Fueled by NVIDIA’s open inference ecosystem, NVIDIA Blackwell delivers unmatched AI reasoning, cost savings, and scalability for seamless deployment.</p>
                    <button type='button' className='p-2' style={{ backgroundColor: "limegreen" }}>Learn More</button>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 text-center">
                  <img className='my-5 img-fluid  h-75 w-75 w-lg-100' src="./hero3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item  swiper-slide ">
            {/* herocontent4 */}

            <div className="slider-content bg-black w-100">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-white">
                  <div className='mt-5 ps-3'>
                    <h3>Networking</h3>
                    <h1>NVIDIA Announces Co-Packaged Silicon Photonic Networking Switches</h1>
                    <p className='fs-4 mt-3'>Scale AI factories to millions of GPUs while increasing energy savings and resiliency.</p>
                    <button type='button' className='p-2' style={{ backgroundColor: "limegreen" }}>Read Press Release</button>
                  </div>

                </div>
                <div className="col-md-12 col-lg-6 text-center">
                  <img className='my-5 img-fluid w-75 w-lg-100' src="./hero4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item  swiper-slide ">
            {/* herocontent5 */}


            <div className="slider-content bg-black w-100">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-white">
                  <div className='mt-5 ps-3'>
                    <h3>Data Center</h3>
                    <h1>NVIDIA RTX PRO 6000 Blackwell Server Edition</h1>
                    <p className='fs-4 mt-3'>The first NVIDIA Blackwell-powered data center GPU built for both visual computing and enterprise AI is designed to accelerate the most demanding workloads for every industry</p>
                    <button type='button' className='p-2' style={{ backgroundColor: "limegreen" }}>Learn More</button>
                  </div>

                </div>
                <div className="col-md-12 col-lg-6 text-center">
                  <img className='my-5 img-fluid w-75 w-lg-100' src="./hero5.jpg" alt="" />
                </div>
              </div>
            </div>

          </div>
          <div className="slider-item  swiper-slide ">
            {/* herocontent6 */}

            <div className="slider-content bg-black w-100">
              <div className="row">
                <div className="col-md-12 col-lg-6 text-white">
                  <div className='mt-5 ps-3'>
                    <h3>Networking</h3>
                    <h1>NVIDIA, Telecom Ledears to Develop AI-Native Wireless Networks for 6G</h1>
                    <p className='fs-4 mt-3'>AT&T, Booz Allen Hamilton, MITRE, T-Mobile, Cisco, and Cerberus/ODC to collaborate on development of AI-native 6G network stack on the NVIDIA AI Aerial platform.</p>
                    <button type='button' className='p-2' style={{ backgroundColor: "limegreen" }}> Read Now</button>
                  </div>

                </div>
                <div className="col-md-12 col-lg-6 text-center">
                  <img className='my-5 img-fluid w-75 w-lg-100' src="./hero6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>


        </div>
        {/* Slider Pagination */}
        <div className="slider-controls">
          <ul className="slider-pagination">
            <li className='slider-tab'>
              <p>Simulation</p>
              <p>NVIDIA Omniverse Expands Ecosystem With Wave of Physical AI Adoption</p>
            </li>
            <li className='slider-tab'>
              <p>HPC</p>
              <p>Climate Tech Companies Adopt Earth-2 for Weather Predictions</p>
            </li>
            <li className='slider-tab'>
              <p>Data Center</p>
              <p>NVIDIA Delivers World Record Inference Performance on DeepSeek-R1</p>
            </li>
            <li className='slider-tab'>
              <p>Networking</p>
              <p>NVIDIA Announces Co-Packaged Silicon Photonic Networking Switches</p>
            </li>
            <li className='slider-tab'>
              <p>Data Center</p>
              <p>NVIDIA RTX PRO 6000 Blackwell Server Edition</p>
            </li>
            <li className='slider-tab'>
              <p>Networking</p>
              <p>NVIDIA, Telecom Ledears to Develop AI-Native Wireless Networks for 6G</p>
            </li>

          </ul>
        </div>
      </div>

    </>
  )
}

export default Hero