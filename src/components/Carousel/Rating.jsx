import ActiveStar from "../../assets/active-star";
import InactiveStar from "../../assets/inactive-star";

function RatingScale({noteValue}){
    const range = [1, 2, 3, 4, 5];
    const noteType = "{dataFiltered.rating}" === 'range' ? (
    <img src={ActiveStar} alt="red-star" />
    ) : (
    <img src={InactiveStar} alt="grey-star" />
  )
  return (
  <div>
    {range.map((rangeElem) => 
    noteValue >= rangeElem ? <span key={rangeElem.toString()}>{noteType}</span> : null
  )}
  </div>
  )
  
}

export default RatingScale