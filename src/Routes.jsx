import { Children } from "react";
import { Home } from "./components/Home";
import { App } from "./App";
import { NavigationBar } from "./components/NavigationBar";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { WishList } from "./components/WishList";

const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "Shop", element: <Shop /> },
			{ path: "Cart", element: <Cart /> },
			{ path: "WishList", element: <WishList /> },
		],
	},
];

export { routes };
