import { IMG_URL } from "../utils/constants"

const RestaurantCard = (props) => {
    // console.log(props.res_info.info);

    return (
        <div className="res-card">
            <img className="res-logo"
                src={IMG_URL + props.res_info.info.cloudinaryImageId} alt="" />
            <h2>{props.res_info.info.name}</h2>
            <h4 >{props.res_info.info.avgRatingString}</h4>
            <h4 >{props.res_info.info.sla.slaString}</h4>
            <h4 >{props.res_info.info.cuisines}</h4>
        </div>
    )
}

export default RestaurantCard;