import { useState, useEffect } from "react";
import {useParams, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Carrousel from "../../Components/Carousel/Carousel";
import Collapse from "../../Components/Collapse/Collapse";
import Host from "../../Components/Host/Host";
import Rate from "../../Components/Rating/Rating";
import Tag from "../../Components/Tag/Tag";
import Footer from "../../Components/Footer/Footer";    
import axios from "axios";

export default function FicheLogement() {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);

    const [pickedAppart, setPickedAppart] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("/logements.json");
                const picked = res.data.find(({ id: appartId }) => appartId === id);
                if (picked) {
                    setPickedAppart(picked);
                } else {
                    console.log("No apartment found, navigating to 404");
                    navigate("/404", { state: { message: "Can't get data" } });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                navigate("/404", { state: { message: "Can't get data" } });
            }
        };
        getData();
    }, [id, navigate]);

    const slidePics = pickedAppart && pickedAppart.pictures;
    const tags = pickedAppart && pickedAppart.tags;
    const equipments = pickedAppart && pickedAppart.equipments;
    const equip =
        pickedAppart &&
        equipments.map((item, index) => (
            <li key={index} className="equipList">
                {item}
            </li>
        ));
    return (
        pickedAppart && (
            <div key={id} className="fiche-container">
                <Header />
                <Carrousel slides={slidePics} />
                <section className="hostInfo-container">
                    <div className="title-tags-container">
                        <div className="title-container redFont">
                            <h1>{pickedAppart.title}</h1>
                            <h3>{pickedAppart.location}</h3>
                        </div>
                        <div className="tags-container">
                            {tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rate-host-container">
                        <div className="host-container redFont">
                            <Host
                                hostName={pickedAppart.host.name}
                                hostPic={pickedAppart.host.picture}
                            />
                        </div>
                        <div className="rate-container">
                            <Rate score={pickedAppart.rating} />
                        </div>
                    </div>
                </section>
                <div className="collapse-fiche-container">
                    <Collapse
                        aboutTitle="Description"
                        aboutText={pickedAppart.description}
                    />
                    <Collapse aboutTitle="Équipements" aboutText={equip} />
                </div>
                <Footer />
            </div>
        )
    );
}