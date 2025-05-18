import "../style/wishList.css";

import { useOutletContext } from "react-router-dom";

import { DetailBox } from "./DetailBox";

const WishList = () => {
	const {
		items,
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
	} = useOutletContext();

	const showDetails = (index) => {
		setTempImage(items[index].image);
		setTempTitle(items[index].title);
		setTempPrice(items[index].price);
		setTempRating(items[index].rating);
		setTempDescription(items[index].description);
		setDetailBoxShown(true);
	};

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
			<div className="wishListContainer">
				<div className="wishListHeader">Wishlist</div>
				<div className="itemsDiv">
					{items
						.filter((element, index) => wishList.has(index))
						.map((element, index) => (
							<div
								className="wishListItemDiv"
								onClick={() => showDetails(element.id - 1)}
							>
								<img src={element.image} alt="" className="itemImage" />
								<div className="wishListItemWords">
									<div className="itemTitle">{element.title}</div>
									<div className="itemPrice">${element.price.toFixed(2)}</div>
									<div
										className={`heartIcon ${
											wishList.has(element.id - 1) ? "redHeartIcon" : ""
										}`}
										onClick={(event) => {
											event.stopPropagation();
											clickWishList(wishList, element.id - 1);
										}}
									>
										&#10084;
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export { WishList };
