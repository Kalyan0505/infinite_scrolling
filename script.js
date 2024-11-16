window.addEventListener("load", () => {
  let imageContainer = document.querySelector(".loader");
  let apiKey = "CM6NHysNeNrH7IBEC1uDB2P-7ZA4x9GZA-hb-kgnENE";

  let getImages = async function () {
    let response = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=50`
    );
    let data = await response.json();
    displayImages(data);
  };

  let displayImages = function (data) {
    data.forEach(function (image) {
      let img = document.createElement("img");
      img.src = image.urls.regular;

      let imageDetail = document.createElement("p");
      imageDetail.textContent = image.slug;
      imageDetail.classList.add("imageDetail");

      img.appendChild(imageDetail);
      imageContainer.appendChild(img);
    });
  };

  getImages();

  // Infinite scrolling
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      getImages();
    }
  });
});
