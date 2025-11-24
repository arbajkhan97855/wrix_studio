import React from "react";
import imgAbout from "../assets/studio_images/img_6.jpg";
import { useNavigate } from "react-router-dom";

export function About() {
    const usenavigate = useNavigate()
    return (
        <div className="container my-2">
            <div className="row align-items-center">

                <div className="col-12 col-lg-6 col-md-6 p-3" data-aos="fade-up-right" data-aos-duration="1000" >
                    <div className="about-img">
                        <img
                            src={imgAbout}
                            alt="Studio Photography Showcase"
                        />
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-md-6 p-3" id="about-contend" >
                    <h2 data-aos="fade-up-left" data-aos-duration="1000">About Our Studio</h2>
                    <p data-aos="fade-up-left" data-aos-duration="1000">
                        At <strong>Wrix Studio</strong>, we capture the moments that matter most.
                        Our photography blends creativity, style, and technical expertise to
                        deliver timeless images that tell your story. From portraits to special
                        events, we make every session unique and memorable.
                        <br />

                        Our team believes that photography is more than just taking pictures —
                        it’s about creating an experience. From planning the shoot to the final edits,
                        we ensure comfort, clarity, and quality at every step. At Wrix Studio,
                        we turn moments into art and memories into something you’ll cherish forever.
                    </p>

                    <div className="d-flex gap-3 mt-3" data-aos="zoom-in" data-aos-duration="1000">
                        <button className="btn btn-primary" onClick={() => usenavigate('/gallery')}>View Pictures</button>
                        <button className="btn btn-outline-secondary">Book a Session</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
