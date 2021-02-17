import React from 'react';
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="cards">
            <h1>COVID-19 News</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        // src=photo url
                        //text= title
                        //path= link
                        />
                        <CardItem
                        // src=photo url
                        //text= title
                        //path= link
                        />
                        <CardItem
                        // src=photo url
                        //text= title
                        //path= link
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                        // src=photo url
                        //text= title
                        //path= link
                        />             
                        <CardItem
                        // src=photo url
                        //text= title
                        //path= link
                        />
                        <CardItem
                        // src=photo url
                        //text= title
                        //path= link
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
