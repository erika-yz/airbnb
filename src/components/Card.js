import img_star from "../images/Star.png";

export default function Card(props) {
	return (
		<div className="card">
            <img  src={require('../images/' + props.img)} alt="" className="card--image"  />
            <div className="card--stats">
              <img src={img_star} alt="Star" className="card--star"/> 
              <span>{props.rating} </span>
              <span className="color-gray"> ({props.reviewCount}) • </span>
              <span className="color-gray"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
	);
}