import "../style/shop.css";

import { useState, useEffect } from "react";

import { DetailBox } from "./DetailBox";

import star from "/star.png";
import loadingIcon from "/loading.jpeg";
import { AddToCartNotification } from "./AddToCartNotification";
import { useOutletContext } from "react-router-dom";

import { Sidebar } from "./Sidebar";

const Shop = () => {
	const { items, setItems } = useOutletContext();

	const {
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
	} = useOutletContext();

	const [loading, setLoading] = useState(true);

	const getItems = async () => {
		try {
			const response = await fetch("https://fakestoreapi.com/products");
			const responsejson = await response.json();
			console.log(responsejson);
			return responsejson;
		} catch (err) {
			console.error("cannot fetch api", err);
		}
	};

	useEffect(() => {
		const getTempItems = async () => {
			setLoading(true);
			const tempItems = await getItems();
			setItems(tempItems);
			setLoading(false);
		};
		getTempItems();
	}, []);

	const showDetails = (e, index) => {
		setTempImage(items[index].image);
		setTempTitle(items[index].title);
		setTempPrice(items[index].price);
		setTempRating(items[index].rating);
		setTempDescription(items[index].description);
		setDetailBoxShown(true);
	};

	useEffect(() => {
		if (detailBoxShown) {
			const scrollBarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollBarWidth}px`;
		} else {
			document.body.style.overflow = "auto";
			document.body.style.paddingRight = `0px`;
		}
	}, [detailBoxShown]);

	useEffect(() => {
		if (addToCartList.length > 0) {
			const timeout = setTimeout(() => {
				const bla = [...addToCartList];
				bla.shift();
				setAddToCartList(bla);
			}, 3000);
			return () => clearTimeout(timeout);
		}
	}, [addToCartList]);

	//wishlist

	const { wishList, setWishList } = useOutletContext();

	const clickWishList = (set, index) => {
		const bla = new Set(set);
		if (set.has(index)) {
			bla.delete(index);
			setWishList(bla);
		} else {
			bla.add(index);
			setWishList(bla);
		}
	};

	//filter

	const [filter, setFilter] = useState("");

	const filterItems = (apple) => {
		const bla = [...items];
		if (apple == "b") {
			bla.sort((a, b) => b.price - a.price);
			setItems(bla);
		} else if (apple == "c") {
			bla.sort((a, b) => a.price - b.price);
			setItems(bla);
		} else if (apple == "d") {
			bla.sort((a, b) => b.rating.rate - a.rating.rate);
			setItems(bla);
		} else if (apple == "e") {
			bla.sort((a, b) => a.rating.rate - b.rating.rate);
			setItems(bla);
		}
	};

	useEffect(() => {
		if (filter == "a") {
			return;
		} else if (filter == "b") {
			filterItems("b");
		} else if (filter == "c") {
			filterItems("c");
		} else if (filter == "d") {
			filterItems("d");
		} else if (filter == "e") {
			filterItems("e");
		}
	}, [filter]);

	if (loading) {
		return (
			<div className="loadingContainer">
				<img src={loadingIcon} alt="" className="loadingIcon" />
			</div>
		);
	}

	return (
		<>
			<DetailBox
				image={tempImage}
				title={tempTitle}
				price={tempPrice}
				rating={tempRating}
				description={tempDescription}
				click={() => setDetailBoxShown(false)}
				detailBoxShown={detailBoxShown}
				setAddToCartList={setAddToCartList}
			/>

			{addToCartList.length !== 0 && (
				<AddToCartNotification addToCartList={addToCartList} />
			)}

			<Sidebar setFilter={setFilter} />

			<div className="shopContainer">
				<div className="itemContainer">
					<div className="itemsDiv">
						{items.map((item, index) => (
							<>
								<div className="itemDiv" onClick={(e) => showDetails(e, index)}>
									<img src={item.image} alt="" className="itemImage" />
									<div className="itemWords">
										<div className="itemTitle">{item.title}</div>
										<div className="itemPrice">${item.price.toFixed(2)}</div>
										<div className="itemRating">
											<img src={star} alt="" className="star" />
											<div>{item.rating.rate}</div>
											<div style={{ fontSize: "12px" }}>
												({item.rating.count})
											</div>
										</div>
										<div
											className={`heartIcon ${
												wishList.has(index) ? "redHeartIcon" : ""
											}`}
											onClick={(event) => {
												event.stopPropagation();
												clickWishList(wishList, index);
											}}
										>
											&#10084;
										</div>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export { Shop };
