import React from "react";

export default function Search(props){
  return(
    <>
      <h2 style={{marginLeft:'100px',fontSize:'25px'}}>
        Search
      </h2>
      
      <input onChange={e=>{props.handleSearch(e)}}  type="search"style={{borderColor:'black',marginLeft:'100px',marginBottom:'20px'}}>

      </input>
    </>
  )
}