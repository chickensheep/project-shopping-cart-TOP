import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

import "../style/cart.css";

import { RemoveCart } from "./RemoveCart";

function Cart() {
	const { cart, setCart } = useOutletContext();

	const [removeCartShown, setRemoveCartShown] = useState(false);
	const [removeCartItem, setRemoveCartItem] = useState("");

	const [totalPrice, setTotalPrice] = useState(0);

	const changeQuantity = (title, number) => {
		const tempCart = [...cart];
		for (let i = 0; i < tempCart.length; i++) {
			if (tempCart[i].title == title) {
				if (tempCart[i].quantity + number == 0) {
					setRemoveCartItem(title);
					setRemoveCartShown(true);
					return;
				} else {
					tempCart[i].quantity = tempCart[i].quantity + number;
					setCart(tempCart);
					return;
				}
			}
		}
	};

	useEffect(() => {
		const total = cart.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		);
		setTotalPrice(Math.round(total * 100) / 100);
	}, [cart]);

	return (
		<>
			<RemoveCart
				removeCartShown={removeCartShown}
				removeCartItem={removeCartItem}
				setRemoveCartShown={setRemoveCartShown}
			/>

			{cart.length == 0 && (
				<div className="noItem">There is no item in your cart D:</div>
			)}

			{cart.length !== 0 && (
				<div className="cartContainer">
					<div className="cartHeader">
						<div className="cartHeaderImage">Product</div>
						<div className="cartHeaderEachPrice">Unit Price</div>
						<div className="cartHeaderQuantity">Quantity</div>
						<div className="cartHeaderTotalPrice">Total Price</div>
					</div>

					{cart.map((element, index) => (
						<>
							<div
								className={`cartDiv ${index % 2 == 1 ? "grey" : ""} ${
									index == cart.length - 1 ? "last" : ""
								}`}
							>
								{element.image && (
									<img src={element.image} alt="" className="cartImage" />
								)}
								<div className="cartTitle">{element.title}</div>
								<div className="cartEachPrice">${element.price.toFixed(2)}</div>
								<div className="cartQuantity">
									<button
										className="cartMinus"
										onClick={() => {
											changeQuantity(element.title, -1);
										}}
									>
										-
									</button>
									<div className="cartNumber">{element.quantity}</div>
									<button
										className="cartPlus"
										onClick={() => {
											changeQuantity(element.title, +1);
										}}
									>
										+
									</button>
								</div>
								<div className="cartTotalPrice">
									$
									{(
										Math.round(element.price * element.quantity * 100) / 100
									).toFixed(2)}
								</div>
							</div>
						</>
					))}

					<div className="cartFooter">
						<div className="cartFooterWord">TOTAL TOTAL price: </div>
						<div className="cartFooterNumber">${totalPrice.toFixed(2)}</div>
					</div>
					<div className="checkoutDiv">
						<button
							className="checkoutButton"
							onClick={() => {
								alert("u wan gimme money?? :o");
							}}
						>
							Checkout
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export { Cart };
