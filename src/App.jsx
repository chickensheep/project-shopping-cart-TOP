import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";

const App = () => {
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([]);
	const [wishList, setWishList] = useState(new Set());

	const [tempImage, setTempImage] = useState("");
	const [tempTitle, setTempTitle] = useState("");
	const [tempPrice, setTempPrice] = useState("");
	const [tempRating, setTempRating] = useState("");
	const [tempDescription, setTempDescription] = useState("");
	const [detailBoxShown, setDetailBoxShown] = useState(false);

	const [addToCartList, setAddToCartList] = useState([]);

	return (
		<>
			<NavigationBar cart={cart} />
			<Outlet
				context={{
					items,
					setItems,
					cart,
					setCart,
					wishList,
					setWishList,
					tempImage,
					setTempImage,
					tempTitle,
					setTempTitle,
					tempPrice,
					setTempPrice,
					tempRating,
					setTempRating,
					tempDescription,
					setTempDescription,
					detailBoxShown,
					setDetailBoxShown,
					addToCartList,
					setAddToCartList,
				}}
			/>
		</>
	);
};

export { App };
