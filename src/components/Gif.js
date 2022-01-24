import React from "react";

export default function Gif({title, id, url}){

    return <div>
    <h4>{ title}</h4>
    <small>{id}</small>
    <figure  className='card-figure'><img alt={title} src={url }/></figure>
   </div> 


}