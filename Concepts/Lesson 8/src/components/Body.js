import { Card } from "./Card";
import { useState, useEffect } from "react";
import {cardList} from "./config.js";
import {Shimer} from "./Shimer.js"
import { Link } from "react-router-dom";

export const Body =()=>{
    const [search, setSearch]=useState("");
    const [totalCards, setTotalCards]=useState([]);
    const [cards, setCards] = useState([]);
    function onclick(search) {
        const resCards = totalCards.filter((card)=> {         
            return card.data.name.toLowerCase().includes(search.toLowerCase());
        })
       return resCards;
        
    }
    
    //useEffect Hook call the callback function once after component renders.
    //If dependency array is empty, then It will call only once after initial rendering.
    //If dependency Array has some localState varibles, then useEffect method calls once after initial rendering and After Update of the local state 
    // variable mentioned in the dependency Array.
    useEffect(()=> {
        async function apiCall() {
            const rest = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8892687&lng=77.5966852&page_type=DESKTOP_WEB_LISTING');
            const resp = await rest.json();
            console.log(resp)
            setCards(resp?.data?.cards[2]?.data?.data?.cards);
            setTotalCards(resp?.data?.cards[2]?.data?.data?.cards);
        }
        const restuarants = apiCall();
        }, [])

    //Conditional Rendering............
    return totalCards?.length==0 ? <Shimer/> : (
        <>
       <div>
            <input value = {search} onChange = {e=>setSearch(e.target.value)} /> 
            <button  onClick={e=> setCards(onclick(search))}>Search</button>
        </div>
        <div className="cardList">            
            {cards.length==0? <h1>No Restuarant Found...........</h1> : cards.map((card) =>{
                return <Link to={"/restaurant/"+card.data.id} key={card.data.id}><Card restaurant={card.data} /></Link>
            })}
        </div>
        </>
    );
 }