import React from 'react';
import "../index.css"
const Card = (props) =>{
    const {id,name,username,Gmail} = props;
    return(//The below part is JSX so without react packeage we cant do anything different fuck
   
        <div id="banner" className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>  
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>Nickname: {username}</p>
                <p>mail: {Gmail}</p>
            </div>
        </div>
    );
}

export default Card; //export is mandatory default is only one class or hook