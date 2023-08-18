export const getGifs = async (category) => {
  // const apiKey = "56X3CZbE8oqEaQ7sXG6Gr1IItYwI7Buu";
  // const uri = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;
  const uri = `https://api.giphy.com/v1/gifs/search?api_key=56X3CZbE8oqEaQ7sXG6Gr1IItYwI7Buu&q=${category}&limit=10`;
  const resp = await fetch(uri);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    uri: img.images.downsized_medium.url,
  }));

  return gifs;
};
