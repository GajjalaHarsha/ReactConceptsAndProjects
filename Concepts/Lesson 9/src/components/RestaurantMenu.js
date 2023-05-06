import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "./config";


export const RestaurantMenu = () => {
  useEffect(() => {
    getMenu();
  }, []);
  const { id } = useParams();
  const [items, setItems] = useState([]);
  async function getMenu() {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8892687&lng=77.5966852&restaurantId="+id+"&submitAction=ENTER"
    );
    const menuData = await menu.json();
    const itemDetails =
      menuData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    setItems(itemDetails);
    console.log(items);
  }
  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => {
            return (
              <tr className="item" key={item.card.info.id}>
                <td className="grid">
                  <div className="itemImage">
                    <img
                      src={IMG_URL + item.card.info.imageId}
                      height={100}
                    ></img>
                  </div>
                  <span>{item.card.info?.name}</span>
                </td>
                <td>{item.card.info?.price/100}</td>
                <td>{item.card.info?.itemAttribute?.portionSize}</td>
                <td>{item.card.info?.ratings.aggregatedRating.rating} Stars</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
