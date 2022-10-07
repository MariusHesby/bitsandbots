function ImageSlider() {
  return (
    <div className="uses-bootstrap">
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active w-full h-screen">
            <img
              src="/assets/temp/1.jpg"
              className="d-block object-cover w-screen h-full"
              alt="..."
            />
          </div>
          <div className="carousel-item w-full h-screen">
            <img
              src="/assets/temp/2.jpg"
              className="d-block object-cover w-screen h-full"
              alt="..."
            />
          </div>
          <div className="carousel-item w-full h-screen">
            <img
              src="/assets/temp/1.jpg"
              className="d-block object-cover w-screen h-full"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        ></button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        ></button>
      </div>
    </div>
  );
}

export default ImageSlider;
