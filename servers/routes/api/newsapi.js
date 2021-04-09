import axios from "axios";

const url = "http://api.mediastack.com/v1/news?access_key=NEWS_ACCESS_KEY&keywords=covid-19&countries=us";
  
export async function 
        getNews() {
        let result = await fetch(url).then(response => response.json());
        return result.articles;

}