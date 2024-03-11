import restoData from "./utils/mockdata";
import {CDN_URL } from "./utils/constant";

const Restocard = (props)=>{
    const datavalue = props.restoCard.info; 
    return(
          <div className="restos-item" keys={datavalue.id} >
          <img src={`${CDN_URL}${datavalue.cloudinaryImageId}`} width="150" height="150" />
          <div className="resto-details-wrap">
          <h6 className="resto-name">{datavalue.name}</h6>
          <div className="rating-time">
                <span className="rating-sd">{datavalue.avgRating} rating</span> &nbsp;
                <span className="timing-sd">{datavalue.sla.deliveryTime} Mins</span>
          </div>
          <p className="cuisine">{datavalue.cuisines.join(" - ")}</p>
          <p className="address-resto">{datavalue.locality}</p>
          </div>
    </div>
    )
}

export default Restocard;