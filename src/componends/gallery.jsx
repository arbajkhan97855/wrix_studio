import React from "react";
import { GalleryData } from "../data/gallery_data";

export function Gallery(){
    return(
        <>
        <div className="gallery-container">
  <h2 className="gallery-title"data-aos="fade-up" data-aos-duration="1000" >Our Studio Gallery</h2>

  <div className="gallery-grid">
    {GalleryData.map((item)=>{
        return(
            <>
            <img src={item.imgsrc} alt="Studio Image" data-aos="zoom-in" data-aos-duration="1000"/>
            </>
        )
    })}
    
  </div>
</div>

        </>
    )
}