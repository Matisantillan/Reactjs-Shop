import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
	const { totalProductsAdded } = useContext(CartContext);

	return (
		<nav className="Navbar bg-secondary bg-gradient pt-4">
			<Link to="/" className="float-start">
				<img src="https://placedog.net/200/200" alt="logo" />
			</Link>
			<div className="d-flex pt-5 pb-4  justify-content-around align-items-center">
				<NavLink
					to={`/categoria/informatica`}
					className={({ isActive }) =>
						isActive ? "btn btn-primary px-5" : "btn btn-dark px-4"
					}
				>
					Informatica
				</NavLink>
				<NavLink
					to={`/categoria/electronica`}
					className={({ isActive }) =>
						isActive ? "btn btn-primary px-5" : "btn btn-dark px-4"
					}
				>
					Electronica
				</NavLink>
				<NavLink
					to={`/categoria/hogar`}
					className={({ isActive }) =>
						isActive ? "btn btn-primary px-5" : "btn btn-dark px-4"
					}
				>
					Hogar
				</NavLink>
				<CartWidget totalProductsAdded={totalProductsAdded} />
			</div>
		</nav>
	);
};
export default Navbar;
