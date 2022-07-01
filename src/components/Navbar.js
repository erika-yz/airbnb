import logo from '../images/airbnb-logo.png';
export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="Airbnb logo" className="nav--logo"/>     
        </nav>
    )
}