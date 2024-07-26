import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import '../../style/base/_base.scss';

export default function Error() {
	return (
		<>
			<Header/>
			<ErrorPage />
			<Footer/>
		</>
	);
}