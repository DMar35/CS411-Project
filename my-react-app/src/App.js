import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Account from './components/AccountPage';
import TicketPage from "./components/TicketPage";

export default function App() {
	return (
		<div>
		<NavBar/>
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path='/login' element={<Login />} />
			 		<Route path='/register' element={<Register />} />
					<Route path='/home' element={<Home />} />
					<Route path='/account' element={<Account />} />
					<Route path='/ticket/:eventId' element={<TicketPage/>}/>
				</Routes> 
			</div>
		</BrowserRouter>
		</div>
	);
}
