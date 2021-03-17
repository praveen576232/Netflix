import './Banner.css'
import React, { useState, useEffect } from 'react'
import request from '../Requests/request';
import axios from '../Requests/axios';
function Banner() {
    const [banner,setBanner] =useState([]);
    useEffect(()=>{
      async function feachBanner () {
         const result = await axios.get(request.featchNetFlixOriginal);
         setBanner(result.data.results[Math.floor(Math.random() * result.data.results?.length-1)])
         return result;
        }
        feachBanner();
    },[]);
    function truncate(str,n){
        return str?.length >n?str.substr(0,n-1)+"...":str;
    }
    return (
        <header className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
            backgroundPosition:'center center'
            
        }}
        >
          <div className="banner_container">
    <h1 className="banner_title">{banner?.title || banner?.name || banner?.original_name}</h1>
         <div className="banner_buttons">
         <button className="banner_button">Play</button>
         <button className="banner_button">My List</button>
         </div>
    <h1 className="banner_movie_discriptions">{truncate(banner?.overview,150)}</h1>
          </div>
          <div className="banner--fadebottom"></div>
        </header>
    )
}

export default Banner
