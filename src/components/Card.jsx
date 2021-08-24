import React from 'react';
import "../index.css"


function Card(props){
    return (
        <>
        <div className="cards">
            
            <div className="card">
                <img className="card-img" src={props.imgsrc} alt="cardpic" />
            </div>
               
                <div className="card-info">
                    <span className="card-category">{props.des} </span>
                    <h3 className="card-title">{props.title}</h3>
                    <a href={props.link} target="__blank" rel="noreferrer">
                    <button>Watch Now</button>
                    </a>
                </div>
        </div>
        
        </>
    )
}

export default Card;
