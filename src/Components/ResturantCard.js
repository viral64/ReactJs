import { CDN_URL } from "../utils/contant";
//Restuarant Card
const RestuarantCard = (resData) => {
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="tgt"
          src={CDN_URL+resData.resData.cloudinaryImageId}
        />
        <h3>{resData.resData.name}</h3>
        <h4>{resData.resData.cuisines.join(", ")}</h4>
        <h4>{resData.resData.avgRating} Star</h4>
        <h4>{resData.resData.sla.deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestuarantCard;