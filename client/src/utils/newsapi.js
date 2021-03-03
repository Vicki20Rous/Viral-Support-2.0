import axios from "axios";
  

// eslint-disable-next-line import/no-anonymous-default-export
export default {
 getNews: function() {
  return axios.get("https://newsapi.org/v2/everything?q=health&apiKey={96c41822c5bd447d90a6023f747bf769}");

  }
};
  







// let result = await fetch(url).then(response => response.json());
// return result.articles;