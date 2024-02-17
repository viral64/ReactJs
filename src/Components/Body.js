import RestuarantCard  from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";



const Body = () => {
    const [list,setList]=useState(resList);
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterList=resList.filter((res)=>res.info.avgRating>4.3)
               console.log(filterList);
               setList(filterList);
            }}>Top Rated Restuarant</button>
        </div>
        <div className="resContainer">
         {
          list.map((restaurant)=>(
            // console.log(restaurant.info.id,restaurant.info.name)
            <RestuarantCard key={restaurant.info.id} resData={restaurant.info}/>
          ))
         }
        </div>
      </div>
    );
  };
  export default Body;