import React, {useState, createContext,useEffect} from 'react';

export const NewsContext = createContext();

export const NewsProvider = (props) => {

    const API_KEY = "257f789b03134e6190ecd134b9fa6ebb";

    const [trendingNews,setTrendingNews] = useState([]);
  
    useEffect( () => {
      getNews();
      getParticularNews();
    },[]);
  
    
  
  
    const getNews = async() => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      const data = await response.json();
      setTrendingNews(data.articles);
    };
  
    const getParticularNews = async() => {
      const response = await fetch(`https://newsapi.org/v2/everything?q=javascript&apiKey=${API_KEY}`);
      const particulardata = await response.json();
      console.log(particulardata);
    };
  
    
    return(
        <div>
            <NewsContext.Provider value={[trendingNews,setTrendingNews]}>
                {props.children}
            </NewsContext.Provider>
        </div>
    );


}