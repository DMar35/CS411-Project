import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path='/login' element={<Login />} />
			 		<Route path='/register' element={<Register />} />
				</Routes> 
			</div>
		</BrowserRouter>
	);
}
