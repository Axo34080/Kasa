import { useEffect, useState } from "react";
import "../../style/base/_base.scss";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get("/logements.json").then((res) => setData(res.data)); //Axio ici aussi pour API
	}, []);

	return (
		<>
			<Header />
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/FicheLogement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}