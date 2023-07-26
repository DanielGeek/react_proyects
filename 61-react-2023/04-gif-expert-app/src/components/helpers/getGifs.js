export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=bqumbdLo8Lrb1pXLE0Sl8YM3WLw5hPrv&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}