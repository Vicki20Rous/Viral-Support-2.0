import axios from "axios";
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
 getNews: function() {
  return axios.get("http://api.mediastack.com/v1/news?access_key=5f6908ebaf00fb9047a10094bc96ca13&keywords=covid-19&countries=us");

  }
};
  







// let result = await fetch(url).then(response => response.json());
// return result.articles;