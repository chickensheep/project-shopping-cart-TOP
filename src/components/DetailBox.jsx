import { useState } from "react";

import "../style/detailBox.css";

import star from "/star.png";
import { useOutletContext } from "react-router-dom";

const DetailBox = (props) => {
	const [detailNumber, setDetailNumber] = useState(0);

	const { cart, setCart } = useOutletContext();

	const checkNoRepeatCart = (cart, title) => {
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].title == title) {
				return false;
			}
		}
		return true;
	};

	const addRepeatCart = (cart, title, quantity) => {
		const tempCart = [...cart];
		for (let i = 0; i < tempCart.length; i++) {
			if (tempCart[i].title == title) {
				tempCart[i].quantity = tempCart[i].quantity + quantity;
				setCart(tempCart);
				return;
			}
		}
	};

	const updateCart = ({ title, price, quantity, image }) => {
		if (checkNoRepeatCart(cart, title)) {
			setCart((prev) => [...prev, { title, price, quantity, image }]);
		} else {
			addRepeatCart(cart, title, quantity);
		}
	};

	return (
		<>
			<div
				className={`overlay ${props.detailBoxShown ? "shown" : ""}`}
				onClick={() => {
					props.click(), setDetailNumber(0);
				}}
			></div>
			<div className={`detailBox ${props.detailBoxShown ? "shown" : ""}`}>
				{props.detailBoxShown && props.image && (
					<img src={props.image} alt="" className="detailImage" />
				)}
				<div className="detailDetails">
					<div className="detailTitle">{props.title}</div>
					<div className="">{props.description}</div>
					{props.price && <div className="">${props.price.toFixed(2)}</div>}
					<div className="detailRating">
						<img src={star} alt="" className="star" />
						<span>{props.rating.rate}</span>
						<span style={{ fontSize: "12px" }}>({props.rating.count})</span>
					</div>
					<div className="addToCart">
						<button
							className="minus"
							onClick={() => {
								setDetailNumber((prev) => (detailNumber > 0 ? prev - 1 : prev));
							}}
						>
							-
						</button>
						<div className="detailNumber">{detailNumber}</div>
						<button
							className="plus"
							onClick={() => {
								setDetailNumber((prev) => prev + 1);
							}}
						>
							+
						</button>
						<button
							disabled={detailNumber === 0}
							onClick={() => {
								updateCart({
									title: props.title,
									price: props.price,
									quantity: detailNumber,
									image: props.image,
								});
								props.click();
								setDetailNumber(0);
								props.setAddToCartList((prev) => [
									...prev,
									{
										title: props.title,
										quantity: detailNumber,
										image: props.image,
									},
								]);
							}}
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export { DetailBox };
