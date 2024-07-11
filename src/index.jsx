import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Components/ErrorPage';
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const router = createBrowserRouter({
	
	path: "/",
	element: (
		<>
			<Header/>
			<Home />
			<Footer/>
		</>
	),
	errorElement: <ErrorPage />,
	
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>
	);
