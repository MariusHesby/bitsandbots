function ImageSlider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner relative overflow-hidden">
        {/* Slide 1 */}
        <div className="carousel-item duration-500 active relative float-left w-full h-screen">
          <img
            src="/assets/temp/1.jpg"
            className="block object-cover w-screen h-full"
            alt="..."
          />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item duration-500 relative float-left w-full h-screen">
          <img
            src="/assets/temp/2.jpg"
            className="block object-cover w-screen h-full"
            alt="..."
          />
        </div>

        {/* Slide 3 */}
        <div className="carousel-item duration-500 relative float-left w-full h-screen">
          <img
            src="/assets/temp/1.jpg"
            className="block object-cover w-screen h-full"
            alt="..."
          />
        </div>
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      ></button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      ></button>
    </div>
  );
}

export default ImageSlider;
