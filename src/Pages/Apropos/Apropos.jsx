import "../../style/base/_base.scss";
import Collapse from "../../Components/Collapse/Collapse";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import aboutArray from "../../Datas/aboutArray.json"; // fichier JSON avec données collapses



export default function About() {
	return (
		<>
			<Header />
			<AboutBanner />
			<div>
			{aboutArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
			</div>
			<Footer />
		</>
	);
}