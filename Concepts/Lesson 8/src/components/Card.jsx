import { IMG_URL } from "./config";

export const Card = ({restaurant})=> {
    return (
        <div className="card" key={restaurant.id}>
            <img src={IMG_URL + restaurant.cloudinaryImageId} />
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.cuisines.join(', ')}</h3>
            <h4>{restaurant.avgRating} stars</h4>
        </div>
    );
}