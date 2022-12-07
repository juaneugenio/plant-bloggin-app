/** @format */
import "./header.css";
const header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<h1 className="headerTitleSM">My Bl-anty</h1>
				<p className="headerTitleLG">limonada</p>
			</div>
			<img
				className="headerImg"
				src="https://c1.wallpaperflare.com/preview/161/509/211/flower-plant-orchid-nature.jpg"
				alt="indoor plant"
			/>
		</div>
	);
};

export default header;
