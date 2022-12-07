import React from 'react';
import NavBar from './NavBar';
import "./styles.css"
import {Helmet} from 'react-helmet';


const Home = () => {
    return (
        <div className="auth-form-container">
            <Helmet>
                <style>{'body { background-color: #A5D5A7; }'}</style>
            </Helmet>
            <p>This is a paragraph and I am writing on the home page</p>
            <p>This is another paragraph, hi hey hello whatsup yo</p>
            <span className="main">Welcome Back</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet tempor pulvinar at arcu libero sit id dignissim sollicitudin.</p>
            
        </div>
    )
}
export default Home