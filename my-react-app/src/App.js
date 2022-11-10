import './App.css';
import React, { useState } from "react";
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {
	//const [currentForm, setCurrentForm] = useState['login'];

	//const toggleForm = (formName) => {
	//	setCurrentForm(formName);
	//}

	return (
		<div className="App">
			{/*{
				currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
			}*/}
			<Login />
		</div>
	);
}

export default App;
