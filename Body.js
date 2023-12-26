import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {

    const [resData, setResData] = useState([])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        console.log("use effetc");
        fetchData();

    }, [])

    const topRests = () => {
        setResData(resData.filter((res) => res.info.avgRating > 4.4));
        // resData.filter((res) => <RestaurantCard key={res.info.id} res_info={res} />)

    }


    return (
        <div className="body">
            <div className="top-rated" onClick={topRests}>Top Rated Restaurants</div>
            <div className="res-container">
                {resData.map((res) => <RestaurantCard key={res.info.id} res_info={res} />)}
            </div>
        </div>
    )
}

export default Body;