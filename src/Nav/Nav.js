import './Nav.css';
import React,{useEffect,useState} from 'react'

function Nav() {
    const [handelshow,sethandelshow] =useState(false);
    useEffect(() => {
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
sethandelshow(true);
        }else{
sethandelshow(false)
        }
    });
    return ()=>{
        window.removeEventListener("scroll")
    }
       
    }, [])
    return (
        <div className={`nav ${handelshow && "nav_black"}`}>
            <img className="netflix_logo" alt="" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png"></img>
            <img className="netflix_smilee_logo" alt="" src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"></img>
        </div>
    )
}

export default Nav
