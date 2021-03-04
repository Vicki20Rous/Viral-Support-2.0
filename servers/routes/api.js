const axios = require('axios');

 
(async () => {
    const keyword = 'Covid19';

    await getLiveNews(keyword);

})();

async function getLiveNews() {
    const url = `http://api.mediastack.com/v1/news?access_key=5f6908ebaf00fb9047a10094bc96ca13&keywords=Covid19&countries=us`;

    const axiosResponse = await axios.get(url);

    console.log('Axios response from getting live news', axiosResponse.data.data.length,
        axiosResponse.data.data[0], axiosResponse.data.data[7]);


    return axiosResponse.data;


}
