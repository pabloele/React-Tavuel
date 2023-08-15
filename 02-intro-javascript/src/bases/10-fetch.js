const apiKey = "F6SEnwhgTOGDEqhUjN9b1VJSFKOY6gKy";
const endPoint = "https://api.giphy.com/v1/gifs/random";

const peticion = fetch(`${endPoint}?api_key=${apiKey}`);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
