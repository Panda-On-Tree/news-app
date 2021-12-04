import React from "react";
import LatestNewsCard from './LatestNewsCard';
const TrendingNews = ({trendNews}) => {
  
  return (
    <div>
    <div className="trendingnews">
      <div className="trending-left">
        <img src={trendNews[2].urlToImage} alt="" />
      </div>
      <div className="trending-right">
        <h5 >Trending</h5>
        <h1>
            {trendNews[2].title}
        </h1>
        <h3>
          {trendNews[2].description}
        </h3>
      </div>
    </div>
    <div className="breaking-news">
        <div className="breaking-news-container">
          <div className="breaking-news-heading">
          <h2>Breaking News</h2>
          </div>
          <marquee className="marque" behavior="" direction="">{trendNews[3].title}</marquee>
        </div>
    </div>
    <div className="latest-news">
        <div className="latest-news-wrapper">
            <header className="latest-news-header">
              
              <h4>Latest Stories</h4>
              <div>
                <button>Business</button>
                <button>Entertainment</button>
                <button>Science</button>
                <button>Teachnolgy</button>
                </div>
            </header>
            <main className="latest-news-container">
              <LatestNewsCard />
              
            </main>
        </div>
    </div>
    </div>
  );
};

export default TrendingNews;
