const getImage = async () => {
  try {
    const apiKey = "F6SEnwhgTOGDEqhUjN9b1VJSFKOY6gKy";
    const endPoint = "https://api.giphy.com/v1/gifs/random";

    const resp = await fetch(`${endPoint}?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    return data;
  } catch (error) {
    console.error(error);
  }
};

getImage().then(console.log);
