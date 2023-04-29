import "./assets/styles/sakura.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./components/logo/Logo";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Logo />
	</React.StrictMode>
);
