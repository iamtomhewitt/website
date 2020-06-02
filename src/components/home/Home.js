import React from "react";

import "./Home.css";

const Home = () => {
	return (
		<div className="Home">
			<img src={process.env.PUBLIC_URL + '/images/Me.jpg'} alt="" />
			<h1>Tom Hewitt</h1>
			<h2>Software Developer</h2>
		</div>
	);
}

export default Home;
