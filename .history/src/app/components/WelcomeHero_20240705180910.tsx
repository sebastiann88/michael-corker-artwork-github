"use client";
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { PageBlocksWelcomeHero } from "tina/__generated__/types";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function WelcomeHero(props: PageBlocksWelcomeHero) {
  return (
    <>
      {/* <!-- Slider --> */}
      <header>
        <div className="banner-header" data-overlay-dark="2">
          {/* <!-- The opacity on the image is made with "data-overlay-dark="number".You can change it using the numbers 0-9. --> */}
          <div
            className="text-left"
            data-background="img/slider/1.jpg"
          >
            { props.message }
            <div className="container">
              <div className="row">
                <div className="col-md-9 py-12">
                  <div className="o-hidden">
                    <h6>Welcome to the Creative World of Michael Corker</h6>
                    <h1><span>Michael Corker</span></h1>
                    <h2>Artwork Collection</h2>
                    <a href="/artwork" className="btn-curve btn-1"
                      ><span>Explore Artwork</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
