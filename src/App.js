import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/Apropos/Apropos";
import FicheLogement from "./Pages/FicheLogement/FicheLogement";
import Error from "./Pages/Error/Error";


const router = createBrowserRouter([
	{
		path: "/Kasa",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <FicheLogement />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;