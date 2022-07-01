import img_star from "../images/Star.png";

export default function Card(props) {
  let badgeText
  if(props.card.openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if(props.card.location === 'Online'){
    badgeText = "ONLINE"
  }
  

  return (
		<div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
			<img
				src={require("../images/" + props.card.coverImg)}
				alt=""
				className="card--image"
			/>
			<div className="card--stats">
				<img src={img_star} alt="Star" className="card--star" />
				<span>{props.card.stats.rating} </span>
				<span className="color-gray"> ({props.card.stats.reviewCount}) • </span>
				<span className="color-gray"> {props.card.location}</span>
			</div>
			<p className="card--title">{props.card.title}</p>
			<p>
				<span className="bold card--price">From ${props.card.price}</span> / person
			</p>
		</div>
	);
}
