import axios from 'axios'



const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID c3b13dbb9ff78755206d5b92bd7a3c2d19bda11ebf95d51f530063e156d5fb23',
        },
        params: {
            query: term,
        },
    });

    console.log(response)
    return response;
};

export default searchImages;