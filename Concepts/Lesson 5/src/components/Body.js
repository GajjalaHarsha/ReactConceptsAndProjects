import { Card } from "./Card";
import { useState } from "react";
import {cardList} from "./config.js";

export const Body =()=>{
    const [search, setSearch]=useState("");
    const [cards, setCards] = useState(cardList);
    function onclick(search) {
      
        const resCards = cardList.filter((card)=> {
          
            return card.data.name.includes(search);
        })
       return resCards;
        
    }

    return (
        <>
       <div>
            <input value = {search} onChange = {e=>setSearch(e.target.value)} /> 
            <button  onClick={e=> setCards(onclick(search))}>Search</button>
        </div>
        <div className="cardList">
            {cards.map((card) =>{
                if(card!=null)
                    return <Card restaurant={card.data} key={card.data.id}/>
                else return <h1>Empty Cards.</h1>
            })}
        </div>
        </>
    );
 }