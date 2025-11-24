import { GalleryData } from "../data/gallery_data";


export function HomeGallery() {
  return (
    <div className="home-gallery-container">
      <h2 className="home-gallery-title" data-aos="fade-up" data-aos-duration="1000">Featured Studio Shots</h2>

      <div className="home-gallery-row">
        {GalleryData.slice(0,4).map((item, index) => (
          <div className="home-gallery-card" key={index} data-aos="flip-right" data-aos-duration="1000">
            <img src={item.imgsrc} alt={item.title} />

            <div className="card-info">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
