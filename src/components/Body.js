import { useState, useEffect } from "react";
import Restocard from "./Restocard";
import restoData from "./utils/mockdata";
import { API_URL } from "./utils/constant";

// var filterData = restoData;

const Body = ()=>{

    const [restData, setRestData] = useState([]);
   
    useEffect(()=>{
      fetchDataFromLive()
    }, []);


    const fetchDataFromLive = async ()=>{
         
      const data = await fetch(API_URL);
      const json = await data.json();
      console.log(json);
        setRestData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
        
    if(restData.length === 0){
      return "LOADING";
    }

    return (
          <div className="body-wrapper">
                <div className="search-block">
                      <form>
                            <input type="text" placeholder="Search Here..." id="search-item" />
                            <input type="submit" value="Submit" id="submit" />
                      </form>
                     
                      <button className="filter" onClick={()=>{
                            var filterData = restoData.filter((dt)=>{
                              //   console.log(dt)
                             
                                 return dt.info.avgRating > 4
                                
                            });
                        //     console.log(filterData);
                        //     console.log(restData);
                            setRestData(filterData);
                      }} >Filter Restaurant more than 4 rrating</button>
                      <button className="delivery-fil" onClick={()=>{
                        var filterData2 = restoData.filter((dt)=>{
                            return dt.info.sla.deliveryTime < 20
                            
                       });
                      
                  //      console.log(filterData2);
                  //      console.log(restData);
                       setRestData(filterData2);
                      }} >Less than 20 mins of delivery</button>
                </div>
                <div className="restaurant-container">
                  {
                      restData.map((restoDet)=>
                            <Restocard key={restoDet.info.id} restoCard={restoDet}  />
                      )
                  }
                 
                 
                </div>
          </div>
    )
}


export default Body;