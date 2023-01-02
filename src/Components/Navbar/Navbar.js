import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<a href="/">
			<h1 style={{fontSize:"28px",fontWeight:"700",color:"#ffffff"}}><span style={{color:"black"}}>Karmit</span> Verma</h1></a>
			<nav ref={navRef}>
				<Link style={{fontSize:"18px",fontWeight:"600"}} to="/">Home</Link>
				<Link style={{fontSize:"18px",fontWeight:"600"}} to="/about">About me</Link>
				<Link style={{fontSize:"18px",fontWeight:"600"}} to="/skills">Skills</Link>
				<Link style={{fontSize:"18px",fontWeight:"600"}} to="/projects">Projects</Link>
                <Link style={{fontSize:"18px",fontWeight:"600"}} to="/gitStats">Git Stats</Link>
				<Link style={{fontSize:"18px",fontWeight:"600"}} to="/contact">Contact</Link>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;