import ActiveStar from "../../assets/active-star";
import InactiveStar from "../../assets/inactive-star";

function RatingScale(props){
    let n = 0;
    let note = [];

    while(n < 5){
      n++;
    if(n <= props.rating){
      note.push(<ActiveStar />)
    }
    else
    {
      note.push(<InactiveStar />)
    }
    }


  return (
  <div className="slide__host-rating__rating__ratingElement">
    {note.map((data, index) =>
      { 
;        return(
        <span key={index} className="slide__host-rating__rating__ratingElement__rating-star">
          {data}
        </span>
      )}
    )}
  </div>
  )

}

export default RatingScale 