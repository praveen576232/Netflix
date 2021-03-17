import React,{useState,useEffect} from 'react'
import './Row.css';
import axios from '../Requests/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseurl = "https://image.tmdb.org/t/p/original/"
function Row({title,requests,isLargeRow}) {
    const [movies,setMovies]=useState([]);
    const[traielUrl,settraielUrl] =useState("");
    const opts={
    height:"300",
    width:"100%",
    playerVars:{
        autoplay:1
    },
    }

    const getmovietriler =(movie) =>{
        if(traielUrl){
            settraielUrl('')
        }else{
            movieTrailer(movie?.name || "")
            .then((url) =>{
             
            const urlParms =new URLSearchParams(new URL(url).search);
            settraielUrl(urlParms.get("v"))
            }).catch((error)=>{
                console.log(error.message)
            })
            
        }
        console.log(traielUrl)
    }
    useEffect(() => {
      const fetchmovies =async()=>{
      const request = await axios.get(requests);
   
   setMovies(request.data.results);
   return request;
      }
        fetchmovies();
    }, [requests])

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={"row_poasters"}>
                 {
                     movies.map(movie =>(
                         <img

                         key={movie.id}
                         onClick={()=>getmovietriler(movie)}
                         className={`row_poast ${isLargeRow && "row_poaster_large"}`}
                         alt={movie.name} src={`${baseurl}${isLargeRow?movie.poster_path:movie.backdrop_path}`}></img>
                     ))
                 }
            </div>
           {traielUrl && (<YouTube videoId={traielUrl} opts={opts}></YouTube>)} 
        </div>
    )
}

export default Row
