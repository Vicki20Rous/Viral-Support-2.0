import React, { useContext } from "react";
<<<<<<< HEAD:client/src/Pages/News/News.js
import { NewsContext } from "./NewsContext";
=======
import { NewsContext } from "../utils/NewsContext";
>>>>>>> 3adb597d5453c9d8346e127246586b3bc8903130:client/src/components/News.js
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">News App 👋</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;