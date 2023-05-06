export function onSearch(search, totalCards) {
    const resCards = totalCards.filter((card)=> {         
        return card.data.name.toLowerCase().includes(search.toLowerCase());
    })
   return resCards; 
}