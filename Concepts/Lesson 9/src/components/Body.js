import { Card } from "./Card";
import { useState, useEffect } from "react";
import {cardList} from "./config.js";
import {Shimer} from "./Shimer.js"
import { onSearch } from "./utils/helper.js";
import { Link } from "react-router-dom";
import { useRestaurant } from "./utils/useReataurant.js";

export const Body =()=>{

    const [search, setSearch]=useState("");
    
   
    const [totalCards, cards, setCards] = useRestaurant();

    //Conditional Rendering............
    return totalCards?.length==0 ? <Shimer/> : (
        <>
       <div>
            <input value = {search} onChange = {e=>setSearch(e.target.value)} /> 
            <button  onClick={e=> setCards(onSearch(search, totalCards))}>Search</button>
        </div>
        <div className="cardList">            
            {cards.length==0? <h1>No Restuarant Found...........</h1> : cards.map((card) =>{
                return <Link to={"/restaurant/"+card.data.id} key={card.data.id}><Card restaurant={card.data} /></Link>
            })}
        </div>
        </>
    );
 }