const axios = require("axios").default;

const NewsService = {
    getNews: () => {
        const data = {
            url: 'https://api.mediastack.com/v1/news',
            access_key: '5f6908ebaf00fb9047a10094bc96ca13',
            languages: 'en',
            countries: 'us',
            limit: 10,
            offset:10,

        }
        return axios.request(data)
    },
       

    };
