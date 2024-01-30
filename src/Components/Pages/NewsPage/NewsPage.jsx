import React from "react";
import { newsList as NewsList } from "./NewsList";
import NewsItem from "./NewsItem";
import "./NewsPage.css";
import Navbar from "../../Navbar";

function NewsPage() {
  return (
    <div>
      <Navbar />
    <div className="news">
      <h1 className="newsTitle">News</h1>
      <div className="newsList">
        {NewsList.map((newsItem, key) => {
          return (
            <NewsItem
              key={key}
              image={newsItem.image}
              name={newsItem.name}
              para={newsItem.para}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}
export default NewsPage;