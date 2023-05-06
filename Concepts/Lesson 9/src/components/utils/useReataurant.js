import { useState, useEffect } from "react";


export const useRestaurant=()=> {
    
    const [totalCards, setTotalCards]=useState([]);
    const [cards, setCards] = useState([]);
    
    
    
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

    return [totalCards, cards, setCards];

}