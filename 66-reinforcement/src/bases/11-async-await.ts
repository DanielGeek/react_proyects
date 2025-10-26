import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = 'U04NEsQa0g1R7kivoo1Z2PhijeVKm86O';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);
}

const getRandomGifUrl = async (): Promise<string> => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data }: GiphyRandomResponse = await response.json();

    return data.images.original.url;
}

getRandomGifUrl().then(createImageInsideDOM);
