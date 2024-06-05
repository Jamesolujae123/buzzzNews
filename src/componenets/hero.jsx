import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {

   const  key= "0f821188324148279e93cf1086721d2f"; 

   const [articles, setArticles] = useState(null)

   const getNews = async() => { 

    try {
        const response = await axios.get (
            `https://newsapi.org/v2/everything?q=apple&from=2024-06-04&to=2024-06-04&sortBy=popularity&apiKey=${key}`
        );

        console.log(response);
        setArticles(response.data.articles)

    } catch(error) {
        console.log(error)
    }

   }

useEffect (()=> {getNews()} , [])   

  return (
    <div className='nws-cont'>
     
     <div className='main-nws'>    
        {articles?.map((article)=> (
            
           
            <div> 
            <img className='news-Pic' src={article.urlToImage} alt="news-img" />
            <h2>Author:{article.author} </h2>
            <p>{article.description}</p>

        </div> 
        ) ) } 
                </div>

     
      
     <div className='other-nws'>
        <div className='top-right'>

{articles?.slice(9,13).map((article)=> (
<div className='nw-news'>
<img className='nw-news-pic' src={article.urlToImage} alt="" />
<p className='pic-cont'>{article.description.slice(1,100)}</p>
</div>
) ) }

 <div></div>

        </div>
        <div className='ting'>
            cfn
        </div>
     </div>


    </div>
  )
}

export default Hero