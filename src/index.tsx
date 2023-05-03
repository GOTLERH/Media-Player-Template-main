import "./assets/styles/sakura.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar";
import Album from "./components/album/Album";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Navbar />
		<Album />
	</React.StrictMode>
);
