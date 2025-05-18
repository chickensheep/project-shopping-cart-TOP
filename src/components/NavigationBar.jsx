import { Link } from "react-router-dom";

import "../style/navigationBar.css";

import lebron from "/lebron.jpg";
import cartPicture from "/cart.png";
import wishlist from "/wishlist.png";

import { useState, useEffect } from "react";

const NavigationBar = (props) => {
	const [cartTotalNumber, setCartTotalNumber] = useState(0);

	useEffect(() => {
		if (props.cart.length !== 0) {
			const total = props.cart.reduce((acc, ele) => acc + ele.quantity, 0);
			setCartTotalNumber(total);
		} else {
			setCartTotalNumber(0);
		}
	}, [props.cart]);

	return (
		<>
			<nav className="navigationBar">
				<div className="navigationBarLeftDiv">
					<Link to="/">
						<img src={lebron} alt="Shop icon" className="lebron icon" />
					</Link>
				</div>
				<div className="navigationBarCenterDiv">
					<Link to="/" className="link homeLink">
						Home
					</Link>
					<Link to="Shop" className="link shopLink">
						Shop
					</Link>
				</div>
				<div className="navigationBarRightDiv">
					<div className="cartIconDiv">
						<Link to="Cart">
							<img src={cartPicture} alt="Cart icon" className="cart icon" />
						</Link>
						<Link to="Cart">
							<div className="cartTotalNumber">{cartTotalNumber}</div>
						</Link>
					</div>
					<Link to="WishList">
						<img src={wishlist} alt="Wishlist icon" className="wishlist icon" />
					</Link>
				</div>
			</nav>
		</>
	);
};

export { NavigationBar };
