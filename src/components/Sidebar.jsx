import sidebar from "/sidebar.png";
import { useState } from "react";
import "../style/sidebar.css";

const Sidebar = (props) => {
	const [sidebarShown, setSidebarShown] = useState(false);

	return (
		<>
			<div className={`sidebarContainer ${sidebarShown ? "sidebarShown" : ""}`}>
				<div className="sidebarContent">
					<div className="sideBarHeader">Filter by:</div>
					<select
						name=""
						id="selectFilter"
						onChange={(e) => {
							props.setFilter(`${e.target.value}`);
						}}
					>
						<option value="a">None</option>
						<option value="b">Price: High to Low</option>
						<option value="c">Price: Low to High</option>
						<option value="d">Rating: High to Low</option>
						<option value="e">Rating: Low to High</option>
					</select>
				</div>

				<img
					src={sidebar}
					alt=""
					className={`sidebarIcon ${sidebarShown ? "sidebarIconShown" : ""}`}
					onClick={() => {
						setSidebarShown((prev) => !prev);
					}}
				/>
			</div>
		</>
	);
};

export { Sidebar };
