import React, { useState,useEffect ,useContext} from "react";
import TrendingNews from "./TrendingNews";
import { NewsContext } from "./NewsContext";
const NewsPage = () =>{

  const [trendingNews, setTrendingNews]= useContext(NewsContext);

  var news= trendingNews.map(news => (news));
  var trendNews=[];
  for(var i = 0; i<4; i++){
   trendNews.push(news[i]);
  }
  
  const display =() => {
    if(trendingNews.length)
    {
      
      return<TrendingNews trendNews={trendNews}/>
    }
    else{
      console.log("else block");
    }
  }

  return (
    <div className="newspage">{display()}
    </div>
  );
};

export default NewsPage;
