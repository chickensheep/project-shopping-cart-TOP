import "../style/home.css";

import lebronSunshine from "/lebronSunshine.jpg";

const Home = () => {
	return (
		<>
			<div className="homeContainer">
				<a href="https://www.youtube.com/watch?v=lIsTm0lGzY4" target="_blank">
					<img src={lebronSunshine} alt="" />
				</a>
				<div className="">
					Hi. This is an official website selling Lebron's merch. We sell
					Lebron's game worn jersey, basketball signed by him and blablabla. So
					if you are interested, please give me your credit card info hehee!!!{" "}
					<br />
					<br />
					JUST KIDDINGGGGG DO NOT give me ur credit card info. Everything u see
					in this "shop" is not real. So unfortuantely, u cant buy the stuff
					here D: <br />
					<br />
					hope u enjoy this shop and this foto of LEBRONNNNNNNNNN JAMESSSSSSS
				</div>
			</div>
		</>
	);
};

export { Home };
