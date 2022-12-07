/** @format */

import { useState } from "react";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Form />
		</>
	);
}

export default App;
