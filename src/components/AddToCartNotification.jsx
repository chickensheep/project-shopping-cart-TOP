import "../style/addToCart.css";

import { Link } from "react-router-dom";

const AddToCartNotification = (props) => {
	return (
		<div>
			<div className="addToCartContainer">
				{props.addToCartList.map((element) => (
					<>
						<Link to="/Cart" className="addToCartLink">
							<div className="addToCartDiv">
								<div>
									<img src={element.image} alt="" className="addToCartImage" />
								</div>
								<div className="addToCartWord">
									<b>
										{element.title} (x{element.quantity}) <br />
									</b>
									added to cart.
								</div>
							</div>
						</Link>
					</>
				))}
			</div>
		</div>
	);
};

export { AddToCartNotification };
