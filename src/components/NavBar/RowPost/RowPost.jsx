import React,{useEffect, useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css';
import {imgeurl,API_KEY} from '../../../constants/constant';
import axios from '../../../axios'

function Rowpost(props) {
   const [movies, setmovies] = useState([]) 
  const [urlId,seturlId] = useState('')
   
    
        useEffect(() =>{

        axios.get(props.url).then(response=>{
              
           console.log(response.data)
           setmovies(response.data.results)

        }).catch(err=>{

          //  alert('networl error')
             
        })

   },[])
   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
   const handlemovie =(id)=>{

    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      
         if(response.data.results.length!==0){
          seturlId(response.data.results[0])
         }else{
          console.log('Array empty')
         }
    })

   }
  return (
    <div className='row'>
    <h2 className='sub'>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj)=>
        <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter':'poster'} alt='poster' src={`${imgeurl+obj.backdrop_path}`}/>
      )}
      </div>

     {  urlId  &&   <Youtube opts={opts} videoId={urlId.key}/>  }
        
    </div>
  
  )
}

export default Rowpost