import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path='/Login' element={<Login />} />
					<Route path='/Register' element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
