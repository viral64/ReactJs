import RestuarantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [list, setList] = useState([]);

  const [apiList,setApiList]=useState(list);
  const [search, setSearch] = useState("");
  console.log("render body");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    const apidata =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setList(apidata);
    setApiList(apidata); 
  };

  //conditional rendering
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="searchBar">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filterList = list.filter((res) =>
                res.info.name.toLowerCase().includes(search)
              );
              setApiList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="toprated">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = list.filter((res) => res.info.avgRating > 4.3);
              setApiList(filterList);
            }}
          >
            Top Rated Restuarant
          </button>
        </div>
      </div>
      <div className="resContainer">
        {apiList.map((restaurant) => (
          // console.log(restaurant.info.id,restaurant.info.name)
          <RestuarantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
