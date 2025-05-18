import "../style/removeCart.css";
import { useOutletContext } from "react-router-dom";

const RemoveCart = (props) => {
	const { cart, setCart } = useOutletContext();

	const actuallyRemoveCartItem = (title) => {
		setCart((prev) => prev.filter((item) => item.title !== title));
	};

	return (
		<>
			<div className={`overlay ${props.removeCartShown ? "shown" : ""}`}></div>
			<div
				className={`removeCartDiv ${
					props.removeCartShown ? "showRemoveCartDiv" : ""
				}`}
			>
				<div>
					Are you sure you want to remove <b>{props.removeCartItem}</b> from the
					cart?
				</div>
				<div>
					<button
						className="yesButton"
						onClick={() => {
							actuallyRemoveCartItem(props.removeCartItem),
								props.setRemoveCartShown(false);
						}}
					>
						Yes
					</button>
					<button onClick={() => props.setRemoveCartShown(false)}>No</button>
				</div>
			</div>
		</>
	);
};

export { RemoveCart };
